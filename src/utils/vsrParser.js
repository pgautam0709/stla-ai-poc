/**
 * Parses a VSR HTML file and extracts vehicle info and ECU table data.
 * ECU table column mapping (0-indexed):
 *   0  - ECU name
 *   3  - Part Number
 *   7  - Application SW Version (multi-slot, .asvShowCell paragraph)
 *   15 - Supplier
 */
export function parseVSR(htmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');

  const vehicleInfo = {
    vin: '',
    modelYear: '',
    built: '',
    vsrDate: '',
    salesCode: '',
  };

  // --- Vehicle info from header div ---
  const headerDiv = doc.getElementById('header');
  const headerText = headerDiv ? headerDiv.textContent : '';

  const vinMatch = headerText.match(/VIN:([A-Z0-9]{17})/);
  const yearMatch = headerText.match(/Year:(\d{4})/);
  const dateMatch = headerText.match(/Date:\s*([^\n]+)/);
  const bodyMatch = headerText.match(/Body:\s*([^\n]+)/);

  vehicleInfo.vin = vinMatch ? vinMatch[1] : '';
  vehicleInfo.modelYear = yearMatch ? yearMatch[1] : '';
  vehicleInfo.vsrDate = dateMatch ? dateMatch[1].trim() : '';
  vehicleInfo.built = bodyMatch ? bodyMatch[1].trim() : '';

  // --- ECU table ---
  const ecuTable = doc.getElementById('ecuInformationTable');
  const ecus = [];

  if (ecuTable) {
    const rows = ecuTable.querySelectorAll('tbody tr');

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length < 16) return;

      // ECU name — strip any <sup> child (FD marker)
      const ecuCell = cells[0].cloneNode(true);
      ecuCell.querySelectorAll('sup').forEach((s) => s.remove());
      const ecuName = ecuCell.textContent.trim();
      if (!ecuName) return;

      const partNumber = cells[3].textContent.trim();

      // Application SW Version — prefer the human-readable (.asvShowCell) paragraph
      const asvCell = cells[7];
      const asvShow = asvCell.querySelector('.asvShowCell');
      let swVersion = '';
      if (asvShow) {
        const raw = asvShow.textContent.trim();
        // Extract first slot: "#0: 24.21.01, #1: ..." → "24.21.01"
        const slotMatch = raw.match(/#0:\s*([^,]+)/);
        swVersion = slotMatch ? slotMatch[1].trim() : raw;
      } else {
        // Fallback: Software Version column (col 8) showCell
        const swCell = cells[8];
        const showP = swCell ? swCell.querySelector('.showCell') : null;
        swVersion = showP ? showP.textContent.trim() : (swCell ? swCell.textContent.trim() : '');
      }

      const supplier = cells[15].textContent.trim();

      ecus.push({ ecuName, partNumber, swVersion, supplier });
    });
  }

  return { vehicleInfo, ecus };
}

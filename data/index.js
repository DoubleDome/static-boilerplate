const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./kushsheets-bb6acdbdc44d.json');

async function Temp() {
  // spreadsheet key is the long id in the sheets URL
  const doc = new GoogleSpreadsheet('1E8YjfV99vAKDk9JJFygqRzDYteE-QLt_hqF2Q9K9-NM');

  await authenticate(doc);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  const result = await processKeyValuePairs({}, sheet);

  console.log(result);
}
async function authenticate(doc) {
  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });
  // OR load directly from json file if not in secure environment
  // await doc.useServiceAccountAuth(creds);
}
async function processKeyValuePairs(data, sheet) {
  let result = {};
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  rows.map((value, index) => {
    result[value.key] = value.value;
  });
  data[sheet.title] = result;
  return data;
}

const t = Temp();

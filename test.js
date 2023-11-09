import axios from "axios";

async function test() {
  const USERNAME = "adnansid99";
  const YOUR_ACCESS_TOKEN = "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";
  await axios({
    method: "get",
    url: `/users/${USERNAME}`,
    baseURL: "https://api.github.com",
    headers: {
      Authorization: `token ${YOUR_ACCESS_TOKEN}`,
      Accept: "application/json",
    },
  }).then((res) => {
    // console.log(res.data);
    const validatedValue = validateIt(res.data);
    return validatedValue;
  });
}
function validateIt(userData) {
  for (const key in userData) {
    if (userData[key] === null) {
      userData[key] = "Not available";
    }
  }
  return userData;
}
test();
// let a = test();

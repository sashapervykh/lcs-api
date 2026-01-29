const express = require("express");

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/alekspervykh2230521_gmail_com", (req, res) => {
  res.send(getLCS(req.query));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function getLCS(query) {
  const { x: xS, y: yS } = query;
  if (!xS || !yS) {
    return NaN;
  }

  const regex = /^\d+$/;
  if (!regex.test(xS) || !regex.test(yS)) {
    return NaN;
  }
  const x = BigInt(xS);
  const y = BigInt(yS);

  if (x <= 0n || y <= 0n) return NaN;
  if (x === 1n || y === 1n) return "1";
  if (x === y) return y;
  const gcd = x > y ? getGCD(x, y) : getGCD(y, x);
  const lcs = (x / gcd) * y;
  return lcs.toString();
}

function getGCD(max, min) {
  let a = max,
    b = min;

  while (b !== 0n) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

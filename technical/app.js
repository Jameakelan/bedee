function commonPrefix({ list = [] }) {
  const LCP = [];
  if (list.length >= 1 && list.length <= 200) {
    const min = Math.min(...list.map((item) => item.length));
    const minValue = list.filter((item) => item.length === min);
    console.log(minValue);
  }
}

commonPrefix({ list: ["flower", "flow", "flight"] });

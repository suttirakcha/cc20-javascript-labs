const styles = ["Jazz", "Blues"];

styles[2] = "Rock-n-Roll"; // styles.push("Rock-n-roll"); or styles[styles.length] = "Rock-n-Roll"
styles[1] = "Classic";
delete styles[0];

console.log(styles.length); // 3
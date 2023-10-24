export const DEFAULT_CODE = JSON.parse("\"//   _    _       _      ___  _____  ______ _____  _      \\n//  | |  | |     | |    |__ \\\\|  __ \\\\|  ____|  __ \\\\| |     \\n//  | |__| | __ _| | ___   ) | |__) | |__  | |__) | |     \\n//  |  __  |/ _` | |/ _ \\\\ / /|  _  /|  __| |  ___/| |     \\n//  | |  | | (_| | | (_) / /_| | \\\\ \\\\| |____| |    | |____ \\n//  |_|  |_|\\\\__,_|_|\\\\___/____|_|  \\\\_\\\\______|_|    |______|  \\n//\\n\\nconst n = arr.length;\\n\\nconst input = arr.map(witness);\\nconst start = witness(startIdx)\\nconst end = witness(endIdx)\\n\\nconst numInRange = sub(end, start)\\n\\nfor (let i = 0; i < n; i++) {\\n    const idx = mod(add(start, constant(i)), constant(n));\\n    const isIdxInRange = isLessThan(constant(i), numInRange);\\n    const el = selectFromIdx(input, idx)\\n    const res = mul(isIdxInRange, el)\\n    makePublic(res)\\n}\\n\\n// Have a better solution to this puzzle? We'd love to chat!\\n// Send your solution to _.\\n\"")
export const DEFAULT_INPUT = JSON.parse('"{\\n    \\"arr\\": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],\\n    \\"startIdx\\": 6,\\n    \\"endIdx\\": 9\\n}"');
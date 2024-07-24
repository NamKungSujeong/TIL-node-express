const blue = require("./blue");
const sadie = require("./sadie");
const janet = require("./janet");

const allCats = [blue, sadie, janet];

module.exports = allCats;

// 디렉토리 밖에서도 파일을 불러오는게 가능한데
// index.js는 Node에서 쓰이는 특정한 이름으로 일종의 진입점이라 볼 수 있음
// 즉 이 디렉토리에서의 메인 파일
// 따라서  디렉토리 전체를 불러오라고 하면 Node가 index 파일을 찾게 되고
// 해당 파일이 내보내는 게 바로 그 디렉토리가 내보내는 항목이 되는 것

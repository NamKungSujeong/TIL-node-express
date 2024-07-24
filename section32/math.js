const add = (x, y) => x + y;

const PI = 3.14159;

const suqare = (x) => x * x;

// export를 하지 않으면 math 파일에서 명시적으로 특정항목을 내보내라고 하지 않기 때문에
// 다른 파일에서 가져오기를 시도할 때 빈 객체가 가져와짐

module.exports.add = add;
// 단축어 exports.add = add;

module.exports.PI = PI;
// 단축어 exports.PI = PI;

module.exports.suqare = suqare;
// 단축어 exports.suqare = suqare;

//  만든 파일을 불러올 수 있는데 불러온다고 해서 자동으로 파일 내 모든 항목에 액세스할 수는 없음
// 액세스하려는 항목을 특성이든 아니면 함수나 변수든 간에 module.exports에 포함시키라고 명시적으로 얘기해야 함

//线程出错案例
self.onmessage = function (event) {
    throw new Error("Something wrong!");
};


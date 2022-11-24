const myLucky = new LuckyCanvas.SlotMachine('#my-lucky', {
    width: '400px',
    height: '170px',
    blocks: [{
        imgs: [{
            src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/a52c9cc28c429420c2df64197ed7e06b.png",
            width: '100%',
            height: '100%'
        }]
    }],
    slots: [
        { direction: -1 },
        { speed: 20 },
    ],
    prizes: [
        {
            imgs: [{
                width: '100%',
                top: '20%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/9ef1805e19139b822bec214abbff5be9.png"


            }]
        },
        {

            imgs: [{
                width: '80%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/b11cffe380bed10c38409b28ac9738d1.png"

            }]
        },
        {

            imgs: [{
                width: '100%',
                top: '20%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/9ed0330f40714a42a81a1bbc1a2a1a1f.png"


            }]
        },
    ],
    defaultConfig: {
        rowSpacing: '30px',
        colSpacing: '80px'
    }

})

const playGame = () => {
    myLucky.play()
    setTimeout(() => {
        // 假设 4 种结果
        const res = [
            [9, 9, 6],
            [0, 0, 7],
            [6, 6, 6],
            [8, 8, 8]
        ]
        // 随机取一组数据
        const index = res[Math.random() * 2 >> 0]
        // 调用 stop 方法停止游戏
        myLucky.stop(index[0])
    }, 500);
}
// 循环演示
playGame()
setInterval(() => {
    playGame()
}, 6000)
console.log(myLucky)


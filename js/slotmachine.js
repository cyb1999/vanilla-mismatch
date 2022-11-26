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

        { order: [0, 1, 2, 3], direction: -1 },
        { order: [0, 2, 1, 3], speed: 20 },




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
                width: '100%',
                top: '15%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/9ed0330f40714a42a81a1bbc1a2a1a1f.png"
            }]
        },
        {
            imgs: [{
                width: '90%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/8179277b95dff8ff8a41931054e0aeac.png"

            }]
        },
        {
            imgs: [{
                width: '100%',
                top: '10%',
                src: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/d146a2e27d3ef2360f355854b4dbbbf2.png"


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
}
playGame()
console.log(myLucky)
const stopGame = () => {
    const synthetic_text = document.querySelector('.synthetic_text')
    const res = [
        [0, 1],
        [2, 3],
    ]
    // 随机取一组数据
    const index = res[Math.random() * 2 >> 0]

    // 调用 stop 方法停止游戏
    myLucky.stop(index)
    index.forEach((item, index) => {
        if (item == 0) {
            setTimeout(() => {
                synthetic_text.innerHTML = '香蕉和蛋黄酱'

            }, 4000)
        }
        if (item == 2) {
            setTimeout(() => {
                synthetic_text.innerHTML = '鸡排和冰淇淋'
            }, 4000)
        }
    })
    // console.log(index)
    // console.log(index[0] === 'banner')
    // if (index[0] === 'banner') {
    //     console.log('恭喜你中奖了')
    // }
    // const mix_container = document.querySelector('.mix_container');
    // mix_container.classList.add('animate__animated', 'animate__fadeOutDown');
    // synthetic_text.innerHTML = 'マッチするかな?'
    // setTimeout(() => {

    //     window.location.href = '/view/chicken.html'

    // }, 4500)

}


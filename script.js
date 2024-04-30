document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('zczcaise');

  image.addEventListener('click', () => {
    console.log('图片被点击了');
    setTimeout(() => {
      window.location.href = 'file:///Users/xiangyueyi/Desktop/%E5%8F%A4%E4%BB%A3%E6%95%B0%E5%AD%A6%EF%BC%81%E5%90%AF%E5%8A%A8%EF%BC%81/zuchoongzhi.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('zhcaise');

  image.addEventListener('click', () => {
    console.log('图片被点击了');
    setTimeout(() => {
      window.location.href = 'file:///Users/xiangyueyi/Desktop/%E5%8F%A4%E4%BB%A3%E6%95%B0%E5%AD%A6%EF%BC%81%E5%90%AF%E5%8A%A8%EF%BC%81/zhangheng.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('wzycaise');

  image.addEventListener('click', () => {
    console.log('图片被点击了');
    setTimeout(() => {
      window.location.href = 'file:///Users/xiangyueyi/Desktop/%E5%8F%A4%E4%BB%A3%E6%95%B0%E5%AD%A6%EF%BC%81%E5%90%AF%E5%8A%A8%EF%BC%81/%E7%8E%8B%E8%B4%9E%E4%BB%AA.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('zsjcaise');

  image.addEventListener('click', () => {
    console.log('图片被点击了');
    setTimeout(() => {
      window.location.href = 'file:///Users/xiangyueyi/Desktop/%E5%8F%A4%E4%BB%A3%E6%95%B0%E5%AD%A6%EF%BC%81%E5%90%AF%E5%8A%A8%EF%BC%81/zhushijie.html.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('lhcaise');

  image.addEventListener('click', () => {
    console.log('图片被点击了');
    setTimeout(() => {
      window.location.href = 'file:///Users/xiangyueyi/Desktop/%E5%8F%A4%E4%BB%A3%E6%95%B0%E5%AD%A6%EF%BC%81%E5%90%AF%E5%8A%A8%EF%BC%81/liuhui.html';
    }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('zscaise');

  image.addEventListener('click', () => {
    console.log('图片被点击了');
    setTimeout(() => {
      window.location.href = 'file:///Users/xiangyueyi/Desktop/%E5%8F%A4%E4%BB%A3%E6%95%B0%E5%AD%A6%EF%BC%81%E5%90%AF%E5%8A%A8%EF%BC%81/zhaoshuang.html';
    }, 1000);
  });
});


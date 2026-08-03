$(function() {
  const videos = [
    document.getElementById('in-vid-01'),
    document.getElementById('in-vid-02'),
    document.getElementById('in-vid-03')
  ];
  const bars = [
    document.getElementById('in-bar1'),
    document.getElementById('in-bar2'),
    document.getElementById('in-bar3')
  ];
  const cts = [
    document.getElementById('in-cts1'),
    document.getElementById('in-cts2'),
    document.getElementById('in-cts3')
  ];
  const bnCts = [
    document.getElementById('in-bn-cts1'),
    document.getElementById('in-bn-cts2'),
    document.getElementById('in-bn-cts3')
  ];

  let current = 0;

  // 초기화 함수: 현재 비디오만 재생하고 나머지는 멈춤
  function initVideo(index) {
    videos.forEach((video, i) => {
      if (i === index) {
        video.classList.add('active');
        video.muted = true; // 모바일 자동재생 필수
        video.play().catch(e => console.log("재생 오류 방지")); 
        cts[i].classList.add('active');
        if(bnCts[i]) bnCts[i].classList.add('active'); // 텍스트 활성화
      } else {
        video.classList.remove('active');
        video.pause(); // 보이지 않는 비디오는 일시정지
        video.currentTime = 0; // 비디오 초기화
        cts[i].classList.remove('active');
        bars[i].style.width = "0%";
        if(bnCts[i]) bnCts[i].classList.remove('active'); // 텍스트 비활성화
      }
    });
  }

  // 첫 번째 비디오 실행
  initVideo(current);

  // 클릭 시 비디오 실행
  $('.in-bar-container').click(function() {
    var idx = $(this).index(); 
    current = idx;

    initVideo(current);
  });

  // 다음 비디오 실행
  videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
      current = (index + 1) % videos.length;
      initVideo(current);
    });
  });

  // 프로그레스 바 업데이트
  function updateBars() {
    const activeVideo = videos[current];
    if (activeVideo && activeVideo.duration) {
      const percent = (activeVideo.currentTime / activeVideo.duration) * 100;
      bars[current].style.width = percent + "%";
    }
    requestAnimationFrame(updateBars);
  }
  updateBars();


  //cursor
  $(document).mousemove(function(e) {
    $('.in-cursor').css({
      left: e.clientX - 10,
      top: e.clientY - 10
    });
  });

  $('a, button, .in-bar-container').hover(function() {
    $('.in-cursor').addClass('expand');
  }, function() {
    $('.in-cursor').removeClass('expand');
  });
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();  // デフォルトのページ内リンク動作を無効化
            const targetId = this.getAttribute('href'); // クリックされたリンクのhref属性を取得
            const target = document.querySelector(targetId); // 取得したIDからターゲット要素を選択
    
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,  // スクロール位置を50px分調整
                    behavior: 'smooth'           // スムーズなスクロール動作
                });
            }
        });
    });
    
    
});

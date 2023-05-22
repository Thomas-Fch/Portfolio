function ScrollToTop() {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
        <div onClick={handleScrollToTop}>
          <img id="pointer" className="goUp" src="frontend\src\assets\logos\up.png" alt="scrollToTop" />
        </div>
  );
      }

export default ScrollToTop;

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button type="button" onClick={handleScrollToTop} className="pointer">
      <img id="pointer" className="goUp" src="frontend\src\assets\logos\up.png" alt="scrollToTop" />
    </button>
  );
}

export default ScrollToTop;

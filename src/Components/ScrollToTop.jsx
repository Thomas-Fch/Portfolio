import GoUp from "../assets/logos/up.png";

function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button type="button" onClick={handleScrollToTop} className="pointer">
      <img id="pointer" className="goUp" src={GoUp} alt="scrollToTop" />
    </button>
  );
}

export default ScrollToTop;

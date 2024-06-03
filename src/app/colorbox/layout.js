//We define slots using @
//These are the parallel route used in login or signup page etc...
//We can display them conditionally

//children -> page.jsx will come as a children

export default function ColorBoxLayout({ children, left, right }) {
  const isSideBar = false;
  return (
    <section>
      {children}
      {/* {left}
      {right} */}
      {isSideBar ? left : right}
    </section>
  );
}

let React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") {
      return tag(props);
    }
    const element = { tag, props: { ...props, children } };
    console.log(element);
    return element;
  },
};

const App = () => (
  <div className="react-2022">
    <h1>Hello, person!</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia doloremque
      natus dolore explicabo vitae dolores? Molestiae nihil et necessitatibus
      reiciendis officiis nam dolor dolorum voluptate delectus labore.
      Consequatur, molestias provident!
    </p>
  </div>
);

<App />;
// React.createElement("div", { className: "react-2022" }, a);

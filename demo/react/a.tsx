interface AppProps {
  text: string;
}

const App = ({ text }: AppProps) => (
  <div>
    {text}
  </div>
);

ReactDOM.render(
  <App text="This code runs also in React" />,
  document.getElementById('app2'),
);

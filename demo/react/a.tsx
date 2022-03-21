interface AppProps {
  text: string;
}

const App = ({ text }: AppProps) => (
  <div>
    {text}
  </div>
);

ReactDOM.render(
  <App text={`This code runs in <script src="*.tsx">`} />,
  document.getElementById('app2'),
);

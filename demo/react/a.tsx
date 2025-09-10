interface AppProps {
  text: string;
}

const App = ({ text }: AppProps) => (
  <div>
    {text}
  </div>
);

ReactDOM
  .createRoot(document.getElementById('app2'))
  .render(<App text={`This code runs in <script src="*.tsx">`} />);

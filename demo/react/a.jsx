const App = ({ text }) => (
  <div>
    {text}
  </div>
);

ReactDOM
  .createRoot(document.getElementById('app1'))
  .render(<App text={`This code runs in <script src="*.jsx">`} />);

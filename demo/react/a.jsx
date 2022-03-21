const App = ({ text }) => (
  <div>
    {text}
  </div>
);

ReactDOM.render(
  <App text={`This code runs in <script src="*.jsx">`} />,
  document.getElementById('app1'),
);

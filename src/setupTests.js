import Enzyme from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-17";

Enzyme.configure({
  adapter: new EnzymeAdaptor(),
  disableLifecycleMethods: true,
});

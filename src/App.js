import logo from "./logo.svg";
import "./App.css";
import item1 from "./assets/item1.jpg";
import "./styles/style.css";
import trashIcon from "./assets/trash-fill.svg";
import hearthIcon from "./assets/heart-fill.svg";

function App() {
  return (
    <>
      <div className="jumbotron text-center">
        <h2 className="font-weight-bold text-secondary">Shopping Cart</h2>
      </div>
      <div className="container-fluid px-5">
        <div className="row px-5 justify-content-center">
          <div className="col-8 shadow px-5 py-3 rounded mr-5">
            <div className="row">
              <h5 className="font-weight-bold">Cart (2 items)</h5>
            </div>
            <div className="row mt-3">
              <img src={item1} height="300px" className="rounded shadow-sm" alt="" />
              {/* <div className="col">
              </div> */}
              <div className="col">
                <div className="row justify-content-between">
                  <div className="col">
                    <h5 className="font-weight-bold mb-3">Black Jacket</h5>
                    <h6>Jacket</h6>
                    <h6>Color : Black</h6>
                    <h6>Size : M</h6>
                    <div className="row px-3 mt-5">
                      <a href="" className="mr-3 text-secondary align-middle">
                        <img src={trashIcon} alt="" /> <span className="align-middle"> REMOVE ITEM</span>
                      </a>
                      <a href="#" className="text-secondary align-middle">
                        <img src={hearthIcon} alt="" /> <span> MOVE TO WISH LIST</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div class="d-flex flex-column">
                      <form class="form-inline">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span>
                              <button className="btn input-group-text">-</button>
                            </span>
                          </div>
                          <input type="text" class="form-control text-center" value="1" />
                          <div class="input-group-prepend">
                            <span>
                              <button className="btn input-group-text">+</button>
                            </span>
                          </div>
                        </div>
                      </form>
                      <div class="p-2">
                        <div>
                          <h6 className="mt-4"> (Note, 1 price) </h6>
                        </div>
                      </div>
                      <div class="mt-auto p-2">
                        <h5 className="font-weight-bold">$5</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 shadow rounded py-3 px-5">
            <div className="row d-flex">
              <div className="column flex-fill">
                <h5 className="font-weight-bold">The total amount of</h5>
                <h6>Temporary amount</h6>
                <h6>Shipping</h6>
                <hr />
                <h5 className="font-weight-bold">The total amount of (including VAT)</h5>
                <button className="btn btn-primary">GO TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

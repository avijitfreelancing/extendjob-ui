import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import MenuToggler from "@/components/admin/MenuToggler";

const index = () => {
  return (
      <section className="user-dashboard">
          <div className="dashboard-outer">
              <BreadCrumb title="Transaction!" />
              <MenuToggler />
              <div className="row">
                  <div className="col-lg-12">
                      <div className="ls-widget">
                          <div className="tabs-box">
                              <div className="widget-title">
                                  <h4>All Transaction</h4>
                              </div>
                              {/* End widget-title */}

                              <div className="widget-content">
                                  <div className="table-outer">
                                      <table className="default-table manage-job-table">
                                          <thead>
                                          <tr>
                                              <th>#</th>
                                              <th>Transaction id</th>
                                              <th>Package</th>
                                              <th>Expiry</th>
                                              <th>Total Jobs/CVs</th>
                                              <th>Used</th>
                                              <th>Remaining</th>
                                              <th>Status</th>
                                          </tr>
                                          </thead>

                                          <tbody>
                                          <tr>
                                              <td>1</td>
                                              <td className="trans-id">#593677663</td>
                                              <td className="package">
                                                  <a href="#">Super CV Pack</a>
                                              </td>
                                              <td className="expiry">Jan 11, 2021</td>
                                              <td className="total-jobs">50</td>
                                              <td className="used">8</td>
                                              <td className="remaining">42</td>
                                              <td className="status">Active</td>
                                          </tr>
                                          {/* End tr */}

                                          <tr>
                                              <td>2</td>
                                              <td className="trans-id">#593677663</td>
                                              <td className="package">
                                                  <a href="#">Gold Jobs package</a>
                                              </td>
                                              <td className="expiry">Jan 11, 2021</td>
                                              <td className="total-jobs">50</td>
                                              <td className="used">8</td>
                                              <td className="remaining">42</td>
                                              <td className="status">Active</td>
                                          </tr>
                                          {/* End tr */}

                                          <tr>
                                              <td>3</td>
                                              <td className="trans-id">#593677663</td>
                                              <td className="package">
                                                  <a href="#">Silver Jobs package</a>
                                              </td>
                                              <td className="expiry">Jan 11, 2021</td>
                                              <td className="total-jobs">50</td>
                                              <td className="used">8</td>
                                              <td className="remaining">42</td>
                                              <td className="status">Active</td>
                                          </tr>
                                          {/* End tr */}

                                          <tr>
                                              <td>4</td>
                                              <td className="trans-id">#593677663</td>
                                              <td className="package">
                                                  <a href="#">Super CV Pack</a>
                                              </td>
                                              <td className="expiry">Jan 11, 2021</td>
                                              <td className="total-jobs">50</td>
                                              <td className="used">8</td>
                                              <td className="remaining">42</td>
                                              <td className="status">Active</td>
                                          </tr>
                                          {/* End tr */}

                                          <tr>
                                              <td>5</td>
                                              <td className="trans-id">#593677663</td>
                                              <td className="package">
                                                  <a href="#">Gold Jobs package</a>
                                              </td>
                                              <td className="expiry">Jan 11, 2021</td>
                                              <td className="total-jobs">50</td>
                                              <td className="used">8</td>
                                              <td className="remaining">42</td>
                                              <td className="status">Active</td>
                                          </tr>
                                          {/* End tr */}

                                          <tr>
                                              <td>6</td>
                                              <td className="trans-id">#593677663</td>
                                              <td className="package">
                                                  <a href="#">Silver Jobs package</a>
                                              </td>
                                              <td className="expiry">Jan 11, 2021</td>
                                              <td className="total-jobs">50</td>
                                              <td className="used">8</td>
                                              <td className="remaining">42</td>
                                              <td className="status">Active</td>
                                          </tr>
                                          {/* End tr */}
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                              {/* End widget-content */}
                          </div>
                      </div>
                      {/* <!-- Ls widget --> */}
                  </div>
              </div>
              {/* End .row */}
          </div>
          {/* End dashboard-outer */}
      </section>
  );
};

export default index;

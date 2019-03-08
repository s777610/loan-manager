import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Spinner from "../layout/Spinner";

class Clients extends Component {
  render() {
    const { clients } = this.props;
    let totalBalance;

    if (clients) {
      totalBalance = clients.reduce(
        (sum, client) => sum + parseFloat(client.balance),
        0
      );

      return (
        <Fragment>
          <div>
            <div className="row">
              <div className="col-md-6">
                <h2>
                  {" "}
                  <i className="fas fa-users" /> Clients{" "}
                </h2>
              </div>
              <div className="col-md-6">
                <h5 className="text-right text-secondary">
                  Total Owed{" "}
                  <span className="text-primary">${totalBalance}</span>
                </h5>
              </div>
            </div>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>

                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
    } else return <Spinner />;
  }
}

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({ clients: state.firestore.ordered.clients }))
)(Clients);

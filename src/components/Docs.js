import React from 'react';

const Docs = (props) => {
    return (
        <section className="docs">
            <h2>API Documentation </h2>
            <button onClick={props.logout}>Logout</button>

            <div className="route-box api-general">
                <h3>API Key:</h3>
                <p className="route">{props.token}</p>
            </div>

            <div className="route-box api-general">
                <h3>All Routes:</h3>
                <p className="route">https://retroapi.hackeryou.com/api</p>
                <p>All routes need to be prefiexed with this base route.</p>
                <p>Default response format is JSON <span className="highlight">application/json</span>.</p>
            </div>

            <div className="route-box">
                <h3>Years route: </h3>
                <p className="route">GET /years</p>
                <p><span className="highlight">Returns all the years in retro database.</span></p>

                <table className="params">
                    <caption>Query Params:</caption>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>apiKey</td>
                            <td>your api key</td>
                            <td><span className="required">required</span></td>
                        </tr>
                        <tr>
                            <td>sort</td>
                            <td>string</td>
                            <td><span className="optional">optional</span> - Valid sort values: "asc", "desc"</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="route-box">
                <h3>Year route: </h3>
                <p className="route">GET /years/year</p>
                <p><span className="highlight">Returns a single year's most popular movies, shows, songs, and books based on a specific year ID.</span></p>

                <table className="params">
                    <caption>Query Params:</caption>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>

                        <tr>
                            <td>apiKey</td>
                            <td>your api key</td>
                            <td><span className="required">required</span></td>
                        </tr>

                        <tr>
                            <td>year</td>
                            <td>number</td>
                            <td><span className="required">required</span> - Valid date range: 1980 - 2015 inclusive.</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="route-box">
                <h3>Decade route: </h3>
                <p className="route">GET /years/decade</p>
                <p><span className="highlight">Returns all the years in a certain decade.</span></p>

                <table className="params">
                    <caption>Query Params:</caption>
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                            <th>Description</th>
                        </tr>

                        <tr>
                            <td>apiKey</td>
                            <td>your api key</td>
                            <td><span className="required">required</span></td>
                        </tr>

                        <tr>
                            <td>decade</td>
                            <td>number</td>
                            <td><span className="required">required </span>- Valid decade values: 1980, 1990, 2000, 2010</td>
                        </tr>
                        <tr>
                            <td>sort</td>
                            <td>string</td>
                            <td><span className="optional">optional</span> - Valid sort values: "asc", "desc"</td>
                        </tr>
                    </thead>
                </table>
            </div>

        </section>
    );
};

export default Docs;
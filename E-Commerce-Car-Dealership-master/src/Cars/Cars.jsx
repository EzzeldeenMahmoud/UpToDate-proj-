import React from "react";
import { NavLink } from "react-router-dom";


export const  Cars = () => {
    return(<>
    <div id="main" class="alt">

    <section id="one">
        <div class="inner">
            <header class="major">
                <h1>Cars</h1>
            </header>
        </div>
    </section>

    <section>
        <div class="inner">
            <form method="post" action="#">
                <div class="fields">
                    <div class="field quarter">
                        <label>Used/New:</label>
                         
                        <select>
                            <option value="">All</option>
                            <option value="new">New vehicle</option>
                            <option value="used">Used vehicle</option>
                        </select>
                    </div>
                    
                    <div class="field quarter">
                        <label>Vehicle Type:</label>
                         
                        <select>
                            <option value="">--All --</option>
                            <option value="">--All --</option>
                            <option value="">--All --</option>
                            <option value="">--All --</option>
                            <option value="">--All --</option>
                        </select>
                    </div>
                    
                    <div class="field quarter">
                        <label>Make:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                         </select>
                    </div>

                    <div class="field quarter">
                        <label>Model:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Price:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Mileage:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Engine size:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                           </select>
                    </div>

                    <div class="field quarter">
                        <label>Power:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Fuel:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Gearbox:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Doors:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field quarter">
                        <label>Number of seats:</label>
                         
                        <select>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                            <option value="">-- All --</option>
                        </select>
                    </div>

                    <div class="field half text-right">
                        <ul class="actions">
                            <li><input type="submit" value="Search" class="primary"/></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section class="tiles">
        <article>
            <span class="image">

                <img src="../../src/assets/images/product-1-720x480.jpg" alt="" />
            </span>

            <header class="major">
                <p>
                    <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                    <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                    <i class="fa fa-cog"></i> Manual
                </p>

                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <p><del>$11199.00</del> <strong> $11179.00</strong></p>

                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                

                <div class="major-actions">
                    <NavLink to="/cars/:slug" class="button small next">View Car</NavLink>
                </div>
            </header>
        </article>

        <article>
            <span class="image">
                <img src="../../src/assets/images/product-2-720x480.jpg" alt="" />
            </span>
            
            <header class="major">
                <p>
                    <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                    <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                    <i class="fa fa-cog"></i> Manual
                </p>

                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <p><del>$11199.00</del> <strong> $11179.00</strong></p>

                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                

                <div class="major-actions">
                    <NavLink to="/cars/:slug" class="button small next">View Car</NavLink>
                </div>
            </header>
        </article>

        <article>
            <span class="image">
                <img src="../../src/assets/images/product-3-720x480.jpg" alt="" />
            </span>
            
            <header class="major">
                <p>
                    <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                    <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                    <i class="fa fa-cog"></i> Manual
                </p>

                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <p><del>$11199.00</del> <strong> $11179.00</strong></p>

                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                

                <div class="major-actions">
                    <NavLink to="/cars/:slug" class="button small next">View Car</NavLink>
                </div>
            </header>
        </article>

        <article>
            <span class="image">
                <img src="../../src/assets/images/product-4-720x480.jpg" alt="" />
            </span>
            
            <header class="major">
                <p>
                    <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                    <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                    <i class="fa fa-cog"></i> Manual
                </p>

                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <p><del>$11199.00</del> <strong> $11179.00</strong></p>

                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                

                <div class="major-actions">
                    <NavLink to="/cars/:slug" class="button small next">View Car</NavLink>
                </div>
            </header>
        </article>

        <article>
            <span class="image">
                <img src="../../src/assets/images/product-5-720x480.jpg" alt="" />
            </span>
            
            <header class="major">
                <p>
                    <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                    <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                    <i class="fa fa-cog"></i> Manual
                </p>

                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <p><del>$11199.00</del> <strong> $11179.00</strong></p>

                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                

                <div class="major-actions">
                    <NavLink to="/cars/:slug" class="button small next">View Car</NavLink>
                </div>
            </header>
        </article>

        <article>
            <span class="image">
                <img src="../../src/assets/images/product-6-720x480.jpg" alt="" />
            </span>
            
            <header class="major">
                <p>
                    <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                    <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                    <i class="fa fa-cog"></i> Manual
                </p>

                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <p><del>$11199.00</del> <strong> $11179.00</strong></p>

                <p>190 hp  /  Petrol  /  2008  /  Used vehicle</p>

                

                <div class="major-actions">
                    <NavLink to="/cars/:slug" class="button small next">View Car</NavLink>
                </div>
            </header>
        </article>
    </section>

</div>
    </>);
};
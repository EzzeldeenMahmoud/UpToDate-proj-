import React from "react";
import { NavLink } from "react-router-dom";


export const  Home = () => {
    return(<>
					<section id="banner" class="major">
						<div class="inner container">
							<header class="major">
								<h1>Lorem ipsum dolor sit amet isicing</h1>
							</header>
							<div class="content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, libero!</p>
								<ul class="actions home_contact">
									<li><NavLink to="/contact" class="button next scrolly">Contact us</NavLink></li>
								</ul>
							</div>
						</div>
					</section>

					<div id="main">
							
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
							
							<section>
								<div class="inner">
									<header class="major">
										<h2>About us</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
									<ul class="actions readmore">
										<li><NavLink to="/about" class="button next">Read more</NavLink></li>
									</ul>
								</div>
							</section>

							<section class="tiles">
								<article>
									<span class="image">
										<img src="../../src/assets/images/blog-1-720x480.jpg" alt="" />
									</span>
									<header class="major">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

										<p><br/> <span>John Doe</span> | <span>12/06/2020 10:30 </span> | <span>114</span></p>

										<div class="major-actions">
											<NavLink to="/blogs/:slug" class="button small next scrolly">Read Blog</NavLink>
										</div>
									</header>
								</article>
								<article>
									<span class="image">
										<img src="../../src/assets/images/blog-2-720x480.jpg" alt="" />
									</span>
									<header class="major">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

										<p><br/> <span>John Doe</span> | <span>12/06/2020 10:30 </span> | <span>114</span></p>

										<div class="major-actions">
											<NavLink to="/blogs/:slug" class="button small next scrolly">Read Blog</NavLink>
										</div>
									</header>
								</article>
								<article>
									<span class="image">
										<img src="../../src/assets/images/blog-3-720x480.jpg" alt="" />
									</span>
									<header class="major">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

										<p><br/> <span>John Doe</span> | <span>12/06/2020 10:30 </span> | <span>114</span></p>

										<div class="major-actions">
											<NavLink to="/blogs/:slug" class="button small next scrolly">Read Blog</NavLink>
										</div>
									</header>
								</article>
							</section>

							<section>
								<div class="inner">
									<header class="major">
										<h2>Testimonials</h2>
									</header>
									<div class="row">
										<div class="col-6">
											<p><em>"Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt."</em></p>
											<p><strong>- John Doe</strong></p>
											
										</div>

										<div class="col-6">
											<p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores temporibus dolorum minus repudiandae, eaque error corporis aliquam, architecto amet itaque nobis. Omnis itaque est dolore, a nostrum numquam. Quae, facilis."</em></p>
											<p><strong>- Jack Smith</strong></p>
										</div>
									</div>
									<ul class="actions readmore">
										<li><NavLink to="/testimonials" class="button next">Read more</NavLink></li>
									</ul>
								</div>
							</section>
					</div>
    </>);
};
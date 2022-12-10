import React from "react";

export const  BlogDetails = () => {
    return(
        <>
        <div id="main" class="alt">

						
							<section id="one">
								<div class="inner">
									<header class="major">
										<h1>Lorem ipsum dolor sit amet, consectetur</h1>

										<h4><i class="fa fa-user"></i>John Doe  &nbsp;&nbsp;&nbsp;&nbsp;  <i class="fa fa-calendar"></i> 12/06/2020 10:30   &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-eye"></i> 114</h4>
									</header>
									<span class="image main"><img src="../../src/assets/images/blog-fullscreen-1-1920x700.jpg" alt="" /></span>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
									<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
								</div>
							</section>

					</div>

					<section id="contact" class="container">
						<div class="inner">
							<section>
								<header class="major">
									<h2>Leave a Comment</h2>
								</header>

								<form method="post" action="#">
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name"/>
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email"/>
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="6"></textarea>
										</div>

										<div class="field half text-right">
											<ul class="actions">
												<li><input type="submit" value="Send Message" class="primary"/></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
							<section class="split">
								<section>
									<div class="contact-method">
										<span class="icon alt fa-info"></span>
										<h3>Lorem ipsum dolor sit amet.</h3>
										<span>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur. Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</span>
									</div>
								</section>
								<section>
									<div class="contact-method">
										<span class="icon alt fa-share"></span>
										<h3>Share</h3>

										<p class="position-relative">
											<a href="#"  class="icon alt fa-twitter position-relative"><span class="label">Twitter</span></a> &nbsp;
											<a href="#"  class="icon alt fa-facebook position-relative"><span class="label">Facebook</span></a> &nbsp;
											<a href="#"  class="icon alt fa-linkedin position-relative"><span class="label">LinkedIn</span></a> &nbsp;
											<a href="#"  class="icon alt fa-behance position-relative"><span class="label">Behance</span></a>
										</p>
									</div>
								</section>
							</section>
						</div>
					</section>
                    </>
    );
};
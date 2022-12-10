import React from "react";
import { NavLink } from "react-router-dom";

export const  Blog = () => {
    return(<div id="main" class="alt">

        <section id="one">
            <div class="inner">
                <header class="major">
                    <h1>Blog</h1>
                </header>
            </div>
        </section>

        <section class="tiles">
            <article>
                <span class="image">
                    <img src="../../src/assets/images/blog-1-720x480.jpg" alt="" />
                </span>
                <header class="major">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

                    <p>John Doe  &nbsp;/&nbsp;  12/06/2020 10:30  &nbsp;/&nbsp;  114</p>

                    <div class="major-actions">
                        <NavLink to="/blogs/:slug" class="button small next">Read Blog</NavLink>
                    </div>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="../../src/assets/images/blog-2-720x480.jpg" alt="" />
                </span>
                <header class="major">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

                    <p>John Doe  &nbsp;/&nbsp;  12/06/2020 10:30  &nbsp;/&nbsp;  114</p>

                    <div class="major-actions">
                        <NavLink to="/blogs/:slug" class="button small next">Read Blog</NavLink>
                    </div>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="../../src/assets/images/blog-3-720x480.jpg" alt="" />
                </span>
                <header class="major">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

                    <p>John Doe  &nbsp;/&nbsp;  12/06/2020 10:30  &nbsp;/&nbsp;  114</p>

                    <div class="major-actions">
                        <NavLink to="/blogs/:slug" class="button small next">Read Blog</NavLink>
                    </div>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="../../src/assets/images/blog-4-720x480.jpg" alt="" />
                </span>
                <header class="major">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

                    <p>John Doe  &nbsp;/&nbsp;  12/06/2020 10:30  &nbsp;/&nbsp;  114</p>

                    <div class="major-actions">
                        <NavLink to="/blogs/:slug" class="button small next">Read Blog</NavLink>
                    </div>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="../../src/assets/images/blog-5-720x480.jpg" alt="" />
                </span>
                <header class="major">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

                    <p>John Doe  &nbsp;/&nbsp;  12/06/2020 10:30  &nbsp;/&nbsp;  114</p>

                    <div class="major-actions">
                        <NavLink to="/blogs/:slug" class="button small next">Read Blog</NavLink>
                    </div>
                </header>
            </article>
            <article>
                <span class="image">
                    <img src="../../src/assets/images/blog-6-720x480.jpg" alt="" />
                </span>
                <header class="major">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit hic</h3>

                    <p>John Doe  &nbsp;/&nbsp;  12/06/2020 10:30  &nbsp;/&nbsp;  114</p>

                    <div class="major-actions">
                        <NavLink to="/blogs/:slug" class="button small next">Read Blog</NavLink>
                    </div>
                </header>
            </article>
        </section>

</div>);
};
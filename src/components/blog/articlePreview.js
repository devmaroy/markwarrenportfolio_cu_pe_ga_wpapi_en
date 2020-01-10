import React from 'react';
import articleOneImg from '../../images/articles/article-01.jpg';
import articleTwoImg from '../../images/articles/article-02.jpg';
import articleThreeImg from '../../images/articles/article-03.jpg';

const ArticlePreview = () => {
    return (
        <div className="delete-after article-previews">
            <div className="article-preview">
                <img src={ articleOneImg } alt="" className="article-preview__img" />

                <div className="article-preview__meta">
                    <ul className="article-preview__categories">
                        <li>
                            <a href="#" className="article-preview__category">Web Development</a>
                        </li>
                    </ul>

                    <time dateTime="" className="article-preview__date">3 hours ago</time>
                </div>

                <h2 className="article-preview__heading">
                    <a href="#">Halvah tart halvah gummi bonbon cake fruitcake chocolate</a>
                </h2>

                <div className="article-preview__content">
                    <p>Macaroon cupcake dessert caramels halvah croissant sugar plum sweet roll. Cookie oat 
                    cake pastry jujubes. Chocolate cake tootsie roll gummi bears biscuit biscuit soufflé jelly 
                    biscuit. Muffin chocolate bar lemon drops. Cupcake cookie wafer cupcake carrot cupcake 
                    dessert tootsie roll.Pudding pastry dessert. Jelly beans sweet liquorice cupcake candy. 
                    Biscuit brownie topping pudding carrot cake croissant …</p>
                </div>
                
                <a href="" className="button button--primary article-preview__readmore">Read more</a>
            </div>

            <div className="article-preview">
                <img src={ articleTwoImg } alt="" className="article-preview__img" />

                <div className="article-preview__meta">
                    <ul className="article-preview__categories">
                        <li>
                            <a href="#" className="article-preview__category">UI Design</a>
                        </li>
                    </ul>

                    <time dateTime="" className="article-preview__date">6 hours ago</time>
                </div>

                <h2 className="article-preview__heading">
                    <a href="#">Oat beans lemon drops fruitcake topping pie pudding apple</a>
                </h2>

                <div className="article-preview__content">
                    <p>Cake cake danish caramels cookie cookie ice cream dessert. Bear claw cupcake lollipop 
                    dessert pudding gingerbread. Dessert sweet roll dessert jujubes. Jujubes chupa chups 
                    croissant dessert danish donut topping. Chocolate bar dragée chocolate cake muffin. 
                    Brownie tart soufflé chocolate cheesecake pastry biscuit. Jelly lemon drops carrot cake 
                    muffin soufflé candy macaroon lettuce tarts dessert …</p>
                </div>
                
                <a href="" className="button button--primary article-preview__readmore">Read more</a>
            </div>

            <div className="article-preview">
                <img src={ articleThreeImg } alt="" className="article-preview__img" />

                <div className="article-preview__meta">
                    <ul className="article-preview__categories">
                        <li>
                            <a href="#" className="article-preview__category">Review</a>
                        </li>
                    </ul>

                    <time dateTime="" className="article-preview__date">20 hours ago</time>
                </div>

                <h2 className="article-preview__heading">
                    <a href="#">Marshmallow wafer bar chocolate macaroon sesame snaps</a>
                </h2>

                <div className="article-preview__content">
                    <p>Tootsie roll liquorice chocolate bar ice cream. Biscuit caramels cookie halvah cake sugar plum. Brownie macaroon muffin dragée powder pie. Ice cream macaroon chocolate cake marzipan tiramisu ice cream chocolate cake halvah. Caramels sugar plum chocolate sweet lemon drops. Pudding sweet roll cupcake sugar plum sweet gingerbread pudding cheesecake sweet roll muffin brownie …</p>
                </div>
                
                <a href="" className="button button--primary article-preview__readmore">Read more</a>
            </div>
        </div>
    );
};

export default ArticlePreview;
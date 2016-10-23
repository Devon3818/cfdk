import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.oSwiper = null;
        this.oUser = null;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        if (this.oSwiper == null) {
            this.oSwiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                // 如果需要分页器
                pagination: '.swiper-pagination',
            });
            this.oUser = new Swiper('.swiper-container-user', {
                slidesPerView: 4,
                paginationClickable: true,
                slidesPerGroup: 4,
                spaceBetween: 6
            });
        }
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
    ];
    return HomePage;
}());

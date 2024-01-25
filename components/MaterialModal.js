export default {
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            materialList: [
                {
                    id: "1",
                    isChecked: false,
                    imgUrl: {
                        small: "./frontEndPackage/images/product-sm.jpg",
                        large: "./frontEndPackage/images/product-lg.jpg",
                        alt: "spectrometer",
                    },
                    eqip: "液相層析質譜儀 LCMS-8060NX",
                    material: "01361/Simple method creation and batch creation",
                },
                {
                    id: "2",
                    isChecked: false,
                    imgUrl: {
                        small: "./frontEndPackage/images/product-sm.jpg",
                        large: "./frontEndPackage/images/product-lg.jpg",
                        alt: "spectrometer",
                    },
                    eqip: "液相層析質譜儀 LCMS-8060NX",
                    material: "01361/Simple method creation and batch creation",
                },
            ],
            selectAll: false,
            checkedCount: 0,
            tabs: [
                {
                    id:"1",
                    title:"分類一"
                },
                {
                    id:"2",
                    title:"分類二"
                },
                {
                    id:"3",
                    title:"分類三"
                },
                {
                    id:"4",
                    title:"分類四"
                }
            ],
            selectedTab: null,
        };
    },
    template: `<div
    class="modal fade"
    id="materialModal"
    tabindex="-1"
    aria-labelledby="materialModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                 <div class="productInfo mb-3">
                    <div class="img-container mb-3 mb-sm-0">
                        <img :src="product?.imgUrl?.large" :alt="product?.imgUrl?.alt" />
                    </div>
                    <div>
                        <h4 class="fs-16 mb-2">{{product.title}}</h4>
                        <p class="fs-14 mb-0">主設備序號：{{product.number}}</p>
                        <div class="d-flex date fs-14">
                            <span>合約日期：</span>
                            <div>
                                <span>{{product.date}}</span>
                                <span class="fs-12 ml-2">合約即將到期</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 class="modal-title mr-3" id="materialModalLabel">耗材清單</h5>
                <ul class="list-unstyled mb-0 tab-carousel owl-carousel owl-theme">
                    <li v-for="item in tabs" :key="item.id">
                        <a href="###" :class="{ 'active': item.id === selectedTab }" @click="selectTab(item.id)">{{item.title}}
                        </a>
                    </li>
                </ul>

                <table class="mb-3">
                    <thead>
                        <tr>
                            <th style="width: 5%"><input type="checkbox" v-model="selectAll" @change="toggleAll"/></th>
                            <th style="width: 8%">編號</th>
                            <th style="width: 15%">圖片</th>
                            <th style="width: 25%">器材名稱</th>
                            <th style="width: 27%">耗材編號/耗材名稱</th>
                            <th style="width: 20%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in materialList" :key="item.id">
                            <td data-title="選取"><span><input type="checkbox" v-model="item.isChecked"/></span></td>
                            <td data-title="編號"><span>{{item.id}}</span></td>
                            <td data-title="圖片">
                                <span><a :href="item.imgUrl.large" data-lightbox="'pic'+item.id">
                                <img :src="item.imgUrl.small" :alt="item.imgUrl.alt" />
                                </a></span>    
                            </td>
                            <td data-title="器材名稱"><span>{{item.eqip}}</span></td>
                            <td data-title="耗材編號/耗材名稱">
                            <span>{{item.material}}</span>
                            </td>
                            <td class="text-center">
                                <span><button
                                type="button"
                                class="ask-btn"
                                @click="addToList">
                                加入詢價<i class="bi bi-plus"></i>
                                </button></span>    
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-right fs-14 pagination">
                        1-20列 (共5頁)<button type="button"><i class="bi bi-chevron-left ml-4 mr-2"></i></button> <button type="button"></i
                            ><i class="bi bi-chevron-right"></i>
                        </button></div>
                <p class="text-center">若無法於此列表中找到欲詢問之耗材，可另於詢問表單中單獨填寫</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn w-100" data-dismiss="modal" @click="addTogether">批次加入清單</button>
            </div>
        </div>
    </div>
</div>`,
    methods: {
        addToList() {
            if (confirm("確定加入詢價？")) {
                this.$emit("emit-num");
            }
        },
        toggleAll() {
            this.materialList.forEach((item) => {
                item.isChecked = this.selectAll;
            });
        },
        addTogether() {
            this.checkedCount = this.materialList.filter((item) => item.isChecked).length;
            if (confirm(`確定將此 ${this.checkedCount} 項同時加入詢價？`)) {
                $("#materialModal").modal("hide");
                this.$emit("emit-all", this.checkedCount);
            }
        },
        selectTab(index) {
            this.selectedTab = index;
        },
    },
    mounted() {
        $(function () {
            //modal頁籤輪播
            $(".tab-carousel").owlCarousel({
                loop: false,
                autoplay: false,
                dots: false,
                nav: true,
                navText: ["", "<i class='bi bi-chevron-right'></i>"],
                margin: 15,
                autoWidth: true,
                responsive: {
                    0: {
                        items: 3,
                    },
                    375: {
                        items: 4,
                    },
                    576: {
                        items: 5,
                    },
                    768: {
                        items: 6,
                    },
                    992: {
                        items: 8,
                    },
                },
            });
        });
    },
};

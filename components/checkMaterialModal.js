export default{
    props:{
        product: {
          type: Object,
          default () { return {} }
        }
      },
    data(){
        return{
            numberList: [
                {
                    number:"CBM-40 lite",
                    level:"L",
                    title:"CBM-40 lite"
                },
                {
                    number:"CBM-40 lite",
                    level:"L",
                    title:"CBM-40 lite"
                },
            ],

        }
    },
    template:` <div
    class="modal fade"
    id="checkNumberModal"
    tabindex="-1"
    aria-labelledby="checkNumberModalLabel"
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
                <div class="d-flex align-items-center productInfo mb-3">
                    <div class="img-container mr-3">
                        <img src="./frontEndPackage/images/product-sm.jpg" alt="" />
                    </div>
                    <div>
                        <h4 class="fs-16 mb-2">紫外/可見光-近紅外光分光光譜儀</h4>
                        <p class="fs-14 mb-0">主設備序號：06UPLC L22135800614</p>
                        <div class="fs-14">
                            合約日期：
                            <span>2023/03/16-2023/12/25</span>
                            <span class="fs-12 ml-2">合約即將到期</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-end justify-content-between">
                    <h5 class="modal-title" id="checkNumberModalLabel">查看附件序號</h5>
                    <div class="text-right fs-14 pagination">
                        1-20列 (共5頁)<button type="button"><i class="bi bi-chevron-left ml-4 mr-2"></i></button> <button type="button"></i
                            ><i class="bi bi-chevron-right"></i>
                        </button></div>
                </div>

                <table class="mb-3 w-100">
                    <thead>
                        <tr>
                            <th style="width: 30%">附件序號(含主機設備序號)</th>
                            <th style="width: 10%">中級</th>
                            <th style="width: 60%">機型</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in numberList" :key="'number'+index">
                            <td data-title="附件序號">{{item.number}}</td>
                            <td data-title="中級">{{item.level}}</td>
                            <td data-title="機型">{{item.title}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`
}
export default{
    props:['login'],
    template:` <section class="nav-container">
    <nav class="container-lg navbar p-0 p-lg-3 navbar-expand-lg justify-content-lg-between">
        <div class="brand-name d-flex align-items-center pt-3 pb-2 pl-3 p-lg-0">
            <h1 class="mb-0">
                <a class="logo" href="/" style="background-image: url('./frontEndPackage/images/logo.png')"
                    >Shimadzu
                </a>
            </h1>
            <h2 class="fs-12 ml-5 mb-0 d-none d-sm-block">
                <a href="/"
                    >台灣島津科學儀器股份有限公司<br /><span>Analytical and Measuring Instruments</span></a
                >
            </h2>
        </div>

        <button
            class="navbar-toggler py-3 pr-3 p-lg-0"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="bi bi-list text-nav menu-icon"></i>
            <i class="bi bi-x text-nav close-icon d-none"></i>
        </button>

        <div class="collapse navbar-collapse mobile-menu" id="mobile-menu">
            <ul class="navbar-nav ml-auto align-items-center">
                <li class="nav-item mr-lg-2 position-relative mb-1 mb-lg-0">
                    <a class="nav-link text-nav text-center" id="nav-service" href="###">儀器列表</a>
                </li>
                <li class="nav-item mr-lg-2 position-relative mb-1 mb-lg-0">
                    <a class="nav-link text-nav text-center" id="nav-project" href="###">續約</a>
                </li>
                <li class="nav-item mr-lg-2 position-relative mb-1 mb-lg-0">
                    <a class="nav-link text-nav text-center" id="nav-entrepreneur" href="###">詢價</a>
                </li>
                <li class="nav-item mr-lg-2 position-relative mb-1 mb-lg-0">
                    <a class="nav-link text-nav text-center" id="nav-boss" href="###">線上叫修/其他</a>
                </li>
                <li class="nav-item mr-lg-2 position-relative mb-1 mb-lg-0">
                    <a v-if="!login" class="nav-link text-nav text-center" id="nav-member" href="###">註冊/登入</a>
                    <a v-else class="nav-link text-nav text-center" href="###"><i class="bi bi-person-circle fs-22"></i></a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container d-sm-none mb-brand">
        <h2 class="fs-12 pb-1 mt-5">
            <a href="/"
                >台灣島津科學儀器股份有限公司<br /><span>Analytical and Measuring Instruments</span></a
            >
        </h2>
    </div>
</section>`
}
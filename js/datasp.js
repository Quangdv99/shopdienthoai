var app = angular.module("myApp", ["ngRoute"]);
// Nhúng web không load lại trang
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "include/index/indexs.html"
        })
        .when("/product", {
            templateUrl: "include/product/products.html"
        })
        .when("/new", {
            templateUrl: "include/news/news.html"
        })
        .when("/contact", {
            templateUrl: "include/contact/Contacts.html"
        })
        .otherwise({
            templateUrl: "include/index/indexs.html"
        });
});
// Hiển thị tin tức trang index
app.controller("myCtrl", function ($scope, $http) {
    $scope.tintuc01 = [
        {
            noidung: " OPPO trình làng điện thoại gập nhưng sẽ không sản xuất hàng loạt.",
            hinhanh: "hinhtintuc_index.jpg",
            ngaydang: "20-9-2019"
        },
        {
            noidung: " Với Qualcomm, 5G không chỉ dành cho điện thoại mà còn cả PC.",
            hinhanh: "hinhtintuc_index2.jpg",
            ngaydang: "20-9-2019"
        },
        {
            noidung: " Galalaxy S10 ra mắt tại Việt Nam: Giá tốt hơn dự kiến, chỉ từ 16 triệu.",
            hinhanh: "hinhtintuc_index3.jpg",
            ngaydang: "20-9-2019"
        }

    ]
    // Hiển thị danh sách sản phẩm giảm giá cuối tuần trang index
    $scope.sanphamgscuoituan = listproducts;

    // Sản phẩm nổi bật
    $scope.dssanphamnoibat = listproducts;
    //Sản phẩm bán chạy
    $scope.dmspbanchay = [
        {
            tendm: "Dưới 2 triệu",
            soluong: "10"
        },
        {
            tendm: "Từ 2-4 triệu",
            soluong: "19"
        },
        {
            tendm: "Từ 4-7 triệu",
            soluong: "7"
        },
        {
            tendm: "Từ 7-13 triệu",
            soluong: "30"
        },
        {
            tendm: "Trên 13 triệu",
            soluong: "12"
        },
        {
            tendm: "Từ 17-20 triệu",
            soluong: "28"
        },
        {
            tendm: "Trên 20 triệu",
            soluong: "14"
        }

    ]
    $scope.sanphambanchay = listproducts;

    $scope.chitiettintuc =
        {
            tieude: " Galalaxy S10 ra mắt tại Việt Nam: Giá tốt hơn dự kiến, chỉ từ 16 triệu",
            nguoidang: "Nguyễn Chánh Bảo Chung",
            ngaydang: "26/02/2019",
            doan1: "Hôm nay (26/2), Samsung đã tổ chức một sự kiện hoành tráng để ra mắt Galaxy S10e, Galaxy S10 và Galaxy S10+ (Galaxy S10 Plus) tại thị trường Việt Nam - một trong những thị trường được mở bán sớm dòng siêu phẩm kỷ niệm 10 năm. Nhìn chung những thiết bị này có giá bán tốt hơn so với dự kiến trước đó.",
            doan2: "Sau một thập kỷ nỗ lực kiến tạo những điều không thể, dòng Galaxy S đã trở thành biểu tượng cho những phát minh di động cao cấp trên toàn thế giới. Galaxy S10 là lời cam kết tiếp theo của chúng tôi dựa trên tinh thần sáng tạo tuyệt vời đó. Ông Suh Kyung Wook – Tổng Giám đốc Công ty Điện tử Samsung Vina chia sẻ.",
            hinh1: "s10-ra-mat-1_800x600.jpg",
            doan3: "Tại Việt Nam, chúng tôi trao quyền chủ động để người dùng hiện thực hóa tương lai của chính mình thông qua những công nghệ đột phá mà Samsung gửi gắm. Galaxy S10 cung cấp mọi thứ người dùng Việt mong đợi từ dòng Galaxy S, và hơn thế nữa, kiến tạo một chuẩn mực điện thoại thông minh mới cho thập kỷ tiếp theo.",
            hinh2: "3_800x450.jpg",
            doan4: "Cả bộ ba dòng Galaxy S10e và Galaxy S10 và Galaxy S10+ đều được trang bị màn hình Dynamic AMOLED hoàn toàn mới đầu tiên trên thế giới đầu tiên hỗ trợ HDR10+. Màn hình này cho độ sáng lên tới 1.200 nit, độ chính xác màu cực cao và tỉ lệ tương phản tốt nhất ở mức 2.000.000:1 và bảo vệ đôi mắt của người sử dụng khi giảm được 42% ánh sáng xanh. Tại thị trường Việt Nam thì bộ 3 sản phẩm này được sử dụng bộ vi xử lý Exynos 9820 8nm do Samsung sản xuất.",
            hinh3: "7_800x450.jpg",
            doan5: "Galaxy S10e là thiết bị có giá bán rẻ nhất trong số 3 sản phẩm được Samsung trình làng, thiết bị này có màn hình phẳng kích thước 5.8 inch Full HD+ và cảm biến vân tay tích hợp ở cạnh bên. Mặt lưng của máy có cụm camera kép sau bao gồm 12 MP và camera góc siêu rộng 123 độ với độ phân giải 16 MP. Phần 'nốt ruồi' ở trong màn hình là nơi đặt camera selfie độ phân giải 10 MP. Ngoài ra, Galaxy S10e được trang bị hệ thống âm thanh nổi AKG, hỗ trợ Dolby Atmos, viên pin dung lượng 3.100 mAh và thiết bị được phân phối một phiên bản duy nhất tại nước ta là 6 GB RAM và 128 GB bộ nhớ trong.",
            hinh4: "ramats10taivietnam16_800x450.jpg",
            doan6: "Còn Galaxy S10 và Galaxy S10+ là những phiên bản cao cấp hơn không chỉ được nâng cấp về hệ thống camera so với Galaxy S10e thì bộ đôi này còn có thêm cảm biến vân tay siêu âm dưới màn hình cho tốc độ mở khóa nhanh, hoạt động được dù ngón tay của người dùng bị ướt hay dính dầu mỡ, kem dưỡng da.. và khả năng sạc ngược cho thiết bị khác, chẳng hạn như chính chiếc tai nghe Galaxy Buds",
            hinh5: "10_800x450.jpg",
            doan7: "Hai thiết bị này đều hữu hệ thống camera sau bao gồm: camera góc rộng 77° độ phân giải 12 MP thay đổi được khẩu độ giữa F/1.5 và F/2.4, góc siêu rộng 123° độ phân giải 16 MP khẩu độ F/2.2 và camera tele độ phân giải 12 MP khẩu độ F/2.4.",
            hinh6: "15_800x450.jpg",
            doan8: "Hệ thống này có một số tính năng mới như trình tối ưu hóa cảnh với khả năng nhận diện hơn 30 cảnh khác nhau, dùng các đề xuất để cải thiện ảnh, tính năng Shot Suggestion cung cấp các mẹo hữu ích để người dùng chụp ảnh đẹp hơn, hỗ trợ quay video HDR10+, xóa phông theo thời gian thực.. và với chế độ Instargram bạn có thể chia sẻ những bức ảnh lên mạng xã hội chỉ với một lần chạm.",
            doan9: " Chưa hết, Galaxy S10 và S10+ còn hỗ trợ quay video 4K, có chống rung từ camera selfie, phiên bản Galaxy S10+ cao cấp hơn vì ngoài camera độ phân giải 10 MP như S10 thì nó còn có thêm một camera 8 MP để xóa phông tốt hơn.",
            hinh7: "6_800x450.jpg",
            doan10: "Galaxy S10 sử dụng màn hình Infinity-O kích thước 6.1 inch, viên pin dung lượng 3.400 mAh và S10+ có viên pin khủng hơn với dung lượng 4.100 mAh, kích thước màn hình lớn 6.4 inch. ",
            doan11: "Cuối cùng, cả 3 phiên bản dòng Galaxy S10 đều hỗ trợ chống nước IP68, hỗ trợ kết nối LTE với tốc độ lên tới 2 Gbps, chuẩn Wi-Fi 6 mới hỗ trợ tốc độ lên tới 1.2 Gbps, hệ điều hành Android 9 Pie với giao diện OneUI và cổng cắm tai nghe 3.5 mm",
            hinh8: "ramats10taivietnam17_800x450.jpg",
            doan12: "Quan trọng nhất, Samsung còn công bố giá bán cụ thể của Galaxy S10 tại thị trường Việt Nam như sau: Galaxy S10e 6 GB RAM /128 GBROM có giá 15.99 triệu chỉ được bán Online, Galaxy S10 8 GB RAM /128 GB ROM giá 20.99 triệu, Galaxy S10+ 8 GB RAM /128 GB ROM giá 22.99 triệu, 8 GB RAM/512 GB ROM giá 28.99 và phiên bản Galaxy S10+ mặt lưng gốm 12 GB RAM/ 1TB ROM giá 33.99 triệu."
        }
    // Tin tức
    $scope.tintuc02 = [
        {
            hinhanh: "tin01.jpg",
            noidung: "Đánh giá chi tiết Camera Huawei P30 pro:Xóa bỏ định kiến về camera smartphone. ",
            thoigian: "2 giờ trước",
            date: "04/07/2019"
        },
        {
            hinhanh: "tin02.jpg",
            noidung: "Đánh giá chi tiết Camera Huawei P30 pro:Xóa bỏ định kiến về camera smartphone.  ",
            thoigian: "2 giờ trước",
            date: "04/07/2019"
        },
        {
            hinhanh: "tin03.jpg",
            noidung: "Đánh giá chi tiết Camera Huawei P30 pro:Xóa bỏ định kiến về camera smartphone. ",
            thoigian: "2 giờ trước",
            date: "04/07/2019"
        },
        {
            hinhanh: "tin04.jpg",
            noidung: "Đánh giá chi tiết Camera Huawei P30 pro:Xóa bỏ định kiến về camera smartphone. ",
            thoigian: "2 giờ trước",
            date: "04/07/2019"
        }
    ]
    $scope.products = listproducts;
    // $http.get('file:///C:/Users/Quang/Desktop/WEB207_Quangdvpk00884_ASM_GD1/WEB207_Quangdvpk00884_ASM_GD1/js/datatrangproduct.js')
    //     .then(function (response) {
    //         $scope.products = response.data;
    //     });
    $scope.prop = "name";
    $scope.sortBy = function (prop) {
        $scope.prop = prop;
    };
    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.products.length / 8);
    $scope.first = function () {
        $scope.begin = 0;
    }
    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 8;
        }
    }
    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 8) {
            $scope.begin += 8;
        }
    }
    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 8;
    }
    // Giỏ hàng version 2
    // $scope.carts = [];

    // var findproductsById = function (sp, masp) {
    //     return _.find(sp, function (sp) {
    //         return sp.masp === masp;
    //     });
    // };

    // $scope.getCost = function (cart) {
    //     return cart.number * cart.gianhap;
    // };

    // $scope.add_cart = function (products) {
    //     var found = findproductsById($scope.carts, products.masp);
    //     if (found) {
    //         found.number += products.number;
    //     }
    //     else {
    //         $scope.carts.push(
    //             {
    //                 tensp: sp.tensp,
    //                 hinhanh: sp.hinhanh,
    //                 soluong: sp.soluong,
    //                 giaban: sp.gianhap
    //             }
    //         );
    //     }
    // };

    // $scope.getTotal = function () {
    //     var total = _.reduce($scope.carts, function (sum, masp) {
    //         return sum + $scope.getCost(masp);
    //     }, 0);
    //     console.log('total: ' + total);
    //     return total;
    // };

  
    // Giỏ hàng

    $scope.carts = [];
    $scope.add_cart = function (sp) {
        if (sp) {
            $scope.carts.push(
                {
                    tensp: sp.tensp,
                    hinhanh: sp.hinhanh,
                    soluong: sp.soluong,
                    giaban: sp.gianhap
                }
            );
        }
    }


    $scope.total = 0;
    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.carts.length; i++) {
            if ($scope.carts.length>0) {
                total += $scope.carts[i].giaban * $scope.carts[i].quantity;
            }
        }
        return total;
    };
    $scope.setTotals = function (cart) {
        if (cart) {
            $scope.total += cart.giaban;
        }
    }

    $scope.remove_cart = function (cart) {
        if (cart) {
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.giaban;
        }
    }
    // Đếm số lượng sản phẩm
    $scope.getAmount = function () {
        var amount = 0;
        amount = $scope.carts.length;
        return amount;
    };
    //Code xóa tất cả sản phẩm đã chọn
    $scope.clearCart = function() {
        $scope.carts.length = 0;
        $scope.total = 0;
      };


});




var listproducts = [
    {
        masp: "1",
        tensp: "Huawei P30",
        hinhanh: "huawei-p30-lite-1-400x400.jpg",
        hangsanxuat: "Huawei",
        soluong: "30",
        xuatsu: "China",
        gianhap: 7000000,
        giaban: 7300000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",


    },
    {
        masp: "2",
        tensp: "Huawei Nova 3i",
        hinhanh: "huawei-mate-20-black-400x400.jpg",
        hangsanxuat: "Huawei",
        soluong: "10",
        xuatsu: "China",
        gianhap: 6000000,
        giaban: 6300000,
        Screen: "LCD Full HD",
        Ram: "4 GB",
        Rom: "32 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",


    },
    {
        masp: "3",
        tensp: "Nokia 8.1",
        hinhanh: "nokia-61-plus-2-400x400.jpg",
        hangsanxuat: "Nokia",
        soluong: "15",
        xuatsu: "China",
        gianhap: 8000000,
        giaban: 8300000,
        Screen: "LCD Full HD+",
        Ram: "4 GB",
        Rom: "64 GB",
        Camera: "24 MP",
        CPU: "Snap dragon 620",


    },
    {
        masp: "4",
        tensp: "Oppo A3s",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "Oppo",
        soluong: "12",
        xuatsu: "China",
        gianhap: 4000000,
        giaban: 4300000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "5",
        tensp: "Xiaomi Mi 8",
        hinhanh: "asus-zenfone-max-pro-m1-400x400.jpg",
        hangsanxuat: "Xiaomi",
        soluong: "30",
        xuatsu: "China",
        gianhap: 6000000,
        giaban: 6500000,
        Screen: "LCD Full HD",
        Ram: "4 GB",
        Rom: "32 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",


    },
    {
        masp: "6",
        tensp: "Vivo V15 Plus+",
        hinhanh: "vivo-v15-6-400x400.jpg",
        hangsanxuat: "Vivo",
        soluong: "20",
        xuatsu: "China",
        gianhap: 5000000,
        giaban: 5300000,
        Screen: "LCD Full HD+",
        Ram: "4 GB",
        Rom: "64 GB",
        Camera: "24 MP",
        CPU: "Snap dragon 620",

    },
    {
        masp: "8",
        tensp: "I Phone XS Max",
        hinhanh: "iphone-xs-max-512gb-gold-400x400.jpg",
        hangsanxuat: "Apple",
        soluong: "30",
        xuatsu: "China",
        gianhap: 7000000,
        giaban: 7300000,
        Screen: "Oled Full 2K",
        Ram: "6 GB",
        Rom: "126 GB",
        Camera: "16 MP",
        CPU: "Aplle A11",

    },
    {
        masp: "9",
        tensp: "Samsung S10 Plus",
        hinhanh: "samsung-galaxy-s10-plus-512gb-ceramic-black-400x400.jpg",
        hangsanxuat: "Samsung",
        soluong: "30",
        xuatsu: "Korena",
        gianhap: 19000000,
        giaban: 12000000,
        Screen: "Amoled 2K",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Enysox 9980",

    },
    {
        masp: "10",
        tensp: "VSamrt Joy 1",
        hinhanh: "vsmart-joy-1-black-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "50",
        xuatsu: "VietNamese",
        gianhap: 2100000,
        giaban: 2900000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "11",
        tensp: "Vsmart Active 1+",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 5000000,
        giaban: 5400000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "12",
        tensp: "Vsmart Active 1",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "13",
        tensp: "Vsmart Active 1 Plus",
        hinhanh: "vsmart-active-1-white-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "14",
        tensp: "Samsung S10 Plus",
        hinhanh: "samsung-galaxy-s10-plus-512gb-ceramic-black-400x400.jpg",
        hangsanxuat: "Samsung",
        soluong: "30",
        xuatsu: "Korena",
        gianhap: 19000000,
        giaban: 12000000,
        Screen: "Amoled 2K",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Enysox 9980",

    },
    {
        masp: "15",
        tensp: "VSamrt Joy 1",
        hinhanh: "vsmart-joy-1-black-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "50",
        xuatsu: "VietNamese",
        gianhap: 2100000,
        giaban: 2900000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "17",
        tensp: "Vsmart Active 1+",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 5000000,
        giaban: 5400000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "18",
        tensp: "Vsmart Active 1",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "19",
        tensp: "Vsmart Active 1 Plus",
        hinhanh: "vsmart-active-1-white-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "20",
        tensp: "Huawei P30",
        hinhanh: "huawei-p30-lite-1-400x400.jpg",
        hangsanxuat: "Huawei",
        soluong: "30",
        xuatsu: "China",
        gianhap: 7000000,
        giaban: 7300000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",


    },
    {
        masp: "21",
        tensp: "Huawei Nova 3i",
        hinhanh: "huawei-mate-20-black-400x400.jpg",
        hangsanxuat: "Huawei",
        soluong: "10",
        xuatsu: "China",
        gianhap: 6000000,
        giaban: 6300000,
        Screen: "LCD Full HD",
        Ram: "4 GB",
        Rom: "32 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",


    },
    {
        masp: "22",
        tensp: "Nokia 8.1",
        hinhanh: "nokia-61-plus-2-400x400.jpg",
        hangsanxuat: "Nokia",
        soluong: "15",
        xuatsu: "China",
        gianhap: 8000000,
        giaban: 8300000,
        Screen: "LCD Full HD+",
        Ram: "4 GB",
        Rom: "64 GB",
        Camera: "24 MP",
        CPU: "Snap dragon 620",


    },
    {
        masp: "23",
        tensp: "Oppo A3s",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "Oppo",
        soluong: "12",
        xuatsu: "China",
        gianhap: 4000000,
        giaban: 4300000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "24",
        tensp: "Xiaomi Mi 8",
        hinhanh: "asus-zenfone-max-pro-m1-400x400.jpg",
        hangsanxuat: "Xiaomi",
        soluong: "30",
        xuatsu: "China",
        gianhap: 6000000,
        giaban: 6500000,
        Screen: "LCD Full HD",
        Ram: "4 GB",
        Rom: "32 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",


    },
    {
        masp: "25",
        tensp: "Vivo V15 Plus+",
        hinhanh: "vivo-v15-6-400x400.jpg",
        hangsanxuat: "Vivo",
        soluong: "20",
        xuatsu: "China",
        gianhap: 5000000,
        giaban: 5300000,
        Screen: "LCD Full HD+",
        Ram: "4 GB",
        Rom: "64 GB",
        Camera: "24 MP",
        CPU: "Snap dragon 620",

    },
    {
        masp: "26",
        tensp: "I Phone XS Max",
        hinhanh: "iphone-xs-max-512gb-gold-400x400.jpg",
        hangsanxuat: "Apple",
        soluong: "30",
        xuatsu: "China",
        gianhap: 7000000,
        giaban: 7300000,
        Screen: "Oled Full 2K",
        Ram: "6 GB",
        Rom: "126 GB",
        Camera: "16 MP",
        CPU: "Aplle A11",

    },
    {
        masp: "27",
        tensp: "Samsung S10 Plus",
        hinhanh: "samsung-galaxy-s10-plus-512gb-ceramic-black-400x400.jpg",
        hangsanxuat: "Samsung",
        soluong: "30",
        xuatsu: "Korena",
        gianhap: 19000000,
        giaban: 12000000,
        Screen: "Amoled 2K",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Enysox 9980",

    },
    {
        masp: "28",
        tensp: "VSamrt Joy 1",
        hinhanh: "vsmart-joy-1-black-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "50",
        xuatsu: "VietNamese",
        gianhap: 2100000,
        giaban: 2900000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "29",
        tensp: "Vsmart Active 1+",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 5000000,
        giaban: 5400000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "30",
        tensp: "Vsmart Active 1",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "31",
        tensp: "Vsmart Active 1 Plus",
        hinhanh: "vsmart-active-1-white-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "32",
        tensp: "Samsung S10 Plus",
        hinhanh: "samsung-galaxy-s10-plus-512gb-ceramic-black-400x400.jpg",
        hangsanxuat: "Samsung",
        soluong: "30",
        xuatsu: "Korena",
        gianhap: 19000000,
        giaban: 12000000,
        Screen: "Amoled 2K",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Enysox 9980",

    },
    {
        masp: "33",
        tensp: "VSamrt Joy 1",
        hinhanh: "vsmart-joy-1-black-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "50",
        xuatsu: "VietNamese",
        gianhap: 2100000,
        giaban: 2900000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "34",
        tensp: "Vsmart Active 1+",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 5000000,
        giaban: 5400000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "35",
        tensp: "Vsmart Active 1",
        hinhanh: "vsmart-active-1-plus-blue-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    },
    {
        masp: "36",
        tensp: "Vsmart Active 1 Plus",
        hinhanh: "vsmart-active-1-white-400x400.jpg",
        hangsanxuat: "VinGroup",
        soluong: "30",
        xuatsu: "VietNamese",
        gianhap: 3400000,
        giaban: 4100000,
        Screen: "LCD Full HD+",
        Ram: "6 GB",
        Rom: "64 GB",
        Camera: "16 MP",
        CPU: "Snap dragon 660",

    }




]
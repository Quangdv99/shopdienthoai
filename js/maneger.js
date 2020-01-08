var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.products = [];
    $http.get('file:///F:/Front-End%20Frameworks/ASM/WEB207_Quangdvpk00884_ASM_GD2/js/products.json').then( function(response){

        $scope.products = response.data;
    });
    // $scope.products = listproducts;
    $scope.prop = "tensp";
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
    $scope.checkOnSubmit = function (event) {
        if ($scope.frmQuantrisanpham.$invalid) {
            alert("Dữ liệu nhập lỗi");
            event.preventDefault(0);
            return false;
        }

        $scope.products.push(
            {
                masp: $scope.masp1,
                tensp: $scope.tensp1,
                hinhanh: $scope.hinhanh1,
                hangsanxuat: $scope.hangsanxuat1,
                soluong: $scope.soluong1,
                xuatsu: $scope.xuatxu1,
                gianhap: $scope.gianhap1,
                giaban: $scope.giaban1
            });
        return true;


    }
    // Code thêm sản phẩm
    // $scope.insert = function () {
    //     $scope.products.push(
    //         {
    //             masp: $scope.masp1,
    //             tensp: $scope.tensp1,
    //             hinhanh: $scope.hinhanh1,
    //             hangsanxuat: $scope.hangsanxuat1,
    //             soluong: $scope.soluong1,
    //             xuatsu: $scope.xuatxu1,
    //             gianhap: $scope.gianhap1,
    //             giaban: $scope.giaban1
    //         }
    //     );
    // }




    // Code làm mới form
    $scope.clear = function () {
        $scope.tensp1 = ""
        $scope.hinhanh1 = "",
            $scope.hangsanxuat1 = "",
            $scope.soluong1 = "",
            $scope.xuatxu1 = "",
            $scope.gianhap1 = "",
            $scope.giaban1 = ""

    }
    // Code xóa sản phẩm
    $scope.delete = function (index) {
        if (confirm("Bạn xác nhận xóa")) {
            $scope.products.splice(index, 1);
        }
    }
    // Code cập nhật sản phẩm
    $scope.update = function () {

        alert($scope.nidex);
        $scope.products[$scope.nidex].masp = $scope.masp1;
        $scope.products[$scope.nidex].tensp = $scope.tensp1;
        $scope.products[$scope.nidex].hinhanh = $scope.hinhanh1;
        $scope.products[$scope.nidex].hangsanxuat = $scope.hangsanxuat1;
        $scope.products[$scope.nidex].soluong = $scope.soluong1;
        $scope.products[$scope.nidex].xuatsu = $scope.xuatxu1;
        $scope.products[$scope.nidex].gianhap = $scope.gianhap1;
        $scope.products[$scope.nidex].giaban = $scope.giaban1;


    }
    // Code chọn sản phẩm cần sửa
    $scope.edititem = function (index) {
        $scope.nidex = index;
        $scope.masp1 = $scope.products[index].masp;
        $scope.tensp1 = $scope.products[index].tensp;
        $scope.hinhanh1 = $scope.products[index].hinhanh;
        $scope.hangsanxuat1 = $scope.products[index].hangsanxuat;
        $scope.soluong1 = $scope.products[index].soluong;;
        $scope.xuatxu1 = $scope.products[index].xuatsu;
        $scope.gianhap1 = $scope.products[index].gianhap;
        $scope.giaban1 = $scope.products[index].giaban;
    }
    // Code hủy thực hiện
    $scope.cancel = function () {
        if ($scope.index == -1) {
            $scope.clear();
        } else {
            $scope.edit($scope.index);
        }
    }
    $scope.orderByMe = function (tensp) {
        $scope.strOrder = tensp;
    }



});
<?php
if(isset($_GET["id"])){
    $maNhanVien = $_GET["id"];
    if($maNhanVien != 0) {
        $sql = "UPDATE nhanvien SET BiXoa = 1 - BiXoa WHERE MaNhanVien = $maNhanVien";
        DataProvider::ExecuteQuery($sql);
        DataProvider::ChangeURL("index.php?c=2");
    } else {
        ?><script>alert('Không thể khóa tài khoản admin.');</script><?php
        DataProvider::ChangeURL("index.php?c=2");
    }

} else {
    DataProvider::ChangeURL("index.php?c=404");
}
?>
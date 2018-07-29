/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 4.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */
function DeleteCat(id) {
	if(confirm("Bạn có chắc muốn thực hiện thao tác xóa loại sản phẩm này?")){
		window.location.href='index.php?c=3&k=401&id='+id;
	}
}

function DeleteProd(id) {
	if(confirm("Bạn có chắc muốn thực hiện thao tác xóa sản phẩm này?")){
		window.location.href='index.php?c=4&k=401&id='+id;
	}
}
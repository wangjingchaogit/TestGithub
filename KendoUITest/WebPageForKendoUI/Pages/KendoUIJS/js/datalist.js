var vDStyle = "margin-right:10px;width:70px;";
function datalist(id, name, distance, state, pagesize, rowCount) {
    this.id = id;
    this.name = name;
    this.distance = distance;
    this.state = state;
    this.pagesize = pagesize;
    this.rowCount = rowCount;
//    this.dataCheckSource = {};
    this.dataSource = {};
}
datalist.prototype.getTotalPage = function () {
    var sender = this;
    var pageCount = 0;
    var pagesize = this.pagesize;
    var rowCount = this.rowCount;
    var total = 0; 

    if (sender.dataSource.zipCodeAPIList != null) {
        total = sender.dataSource.zipCodeAPIList.length;
    }
    var divide = total / pagesize;
    var more = total % pagesize;


    if (divide < 1) { pageCount = 1; }
    else {
        if (more > 0) {
            pageCount = Math.floor(divide) + 1;
        }
    }
    return pageCount;
}
datalist.prototype.databind = function (currentPage) {
    var sender = this;
    var pageCount = 0;
    var pagesize = this.pagesize;
    var rowCount = this.rowCount;
    var total = 0;
    if (sender.dataSource.zipCodeAPIList != null) {
        total = sender.dataSource.zipCodeAPIList.length;
    }

    var divide = total / pagesize;
    var more = total % pagesize;
    if (divide < 1) { pageCount = 1; }
    else {
        if (more > 0) {
            pageCount = Math.floor(divide) + 1;
        }
    }
    var pagesize = this.pagesize;
    var rowCount = this.rowCount;

    var dataHtml = "";
    if (sender.dataSource.zipCodeAPIList != null) {
        
        if (sender.dataSource.zipCodeAPIList.length == 1) {
            dataHtml += "<span style='" + vDStyle + "'><input id='" + sender.dataSource.zipCodeAPIList[0].zip_code + "' type='checkbox' name='datalistitem' value='" + sender.dataSource.zipCodeAPIList[0].state + "#" + item.city + "' />" + sender.dataSource.zipCodeAPIList[0].zip_code + "</span>";
        }
        else {
            $.each(sender.dataSource.zipCodeAPIList, function (i, item) {
                if (i > ((currentPage - 1) * pagesize - 1) && i <= (currentPage * pagesize - 1)) {
                    if (i == 0) {
                        dataHtml += "<span style='" + vDStyle + "'><input id='" + item.zip_code + "' type='checkbox' name='datalistitem' value='" + item.state + "#" + item.city + "' />" + item.zip_code + "</span>";
                    }
                    else if ((i != 0) && (i % rowCount == 0)) {
                        if (dataHtml != "") {
                            dataHtml += "<br/><span style='" + vDStyle + "'><input id='" + item.zip_code + "' type='checkbox' name='datalistitem' value='" + item.state + "#" + item.city + "' />" + item.zip_code + "</span>";
                        }
                        else {
                            dataHtml += "<span style='" + vDStyle + "'><input id='" + item.zip_code + "' type='checkbox' name='datalistitem' value='" + item.state + "#" + item.city + "' />" + item.zip_code + "</span>";
                        }
                    }
                    else {
                        dataHtml += "<span style='margin-right:10px;'><input id='" + item.zip_code + "' type='checkbox' name='datalistitem' value='" + item.state + "#" + item.city + "' />" + item.zip_code + "</span>";
                    }
                }
            });
        }

    }
    return dataHtml;
}


datalist.prototype.getTotalPageByCity = function () {
    var sender = this;
    var pageCount = 0;
    var pagesize = this.pagesize;
    var rowCount = this.rowCount;
    //var total = sender.dataSource.zipCodeAPI.length;
    var total = 0;
    if (sender.dataSource.zipCodeAPIList != null) {
        total = sender.dataSource.zipCodeAPIList.length;
    }
    var divide = total / pagesize;
    var more = total % pagesize;
    if (divide < 1) { pageCount = 1; }
    else {
        if (more > 0) {
            pageCount = Math.floor(divide) + 1;
        }
    }
    return pageCount;
}
datalist.prototype.databindByCity = function (currentPage) {
    var sender = this;
    var pageCount = 0;
    var pagesize = this.pagesize;
    var rowCount = this.rowCount;
    var total = sender.dataSource.zipCodeAPI.length;
    var divide = total / pagesize;
    var more = total % pagesize;
    if (divide < 1) { pageCount = 1; }
    else {
        if (more > 0) {
            pageCount = Math.floor(divide) + 1;
        }
    }
    var pagesize = this.pagesize;
    var rowCount = this.rowCount;

    var dataHtml = "";
    if (sender.dataSource.zipCodeAPI != null) {
        if (sender.dataSource.zipCodeAPI.length == 1) {
            dataHtml += "<span style='" + vDStyle + "'><input id='" + sender.dataSource.zipCodeAPI[0] + "' type='checkbox' name='datalistitem' value='' />" + sender.dataSource.zipCodeAPI[0] + "</span>";
        }
        else {
            $.each(sender.dataSource.zipCodeAPI, function (i, item) {
                if (i > ((currentPage - 1) * pagesize - 1) && i <= (currentPage * pagesize - 1)) {
                    if (i == 0) {
                        dataHtml += "<span style='" + vDStyle + "'><input id='" + sender.dataSource.zipCodeAPI[0] + "' type='checkbox' name='datalistitem' value='' />" + sender.dataSource.zipCodeAPI[0] + "</span>";
                    }
                    else if ((i != 0) && (i % rowCount == 0)) {
                        if (dataHtml != "") {
                            dataHtml += "<br/><span style='" + vDStyle + "'><input id='" + sender.dataSource.zipCodeAPI[i] + "' type='checkbox' name='datalistitem' value='' />" + sender.dataSource.zipCodeAPI[i] + "</span>";
                        }
                        else {
                            dataHtml += "<span style='" + vDStyle + "'><input id='" + sender.dataSource.zipCodeAPI[i] + "' type='checkbox' name='datalistitem' value='' />" + sender.dataSource.zipCodeAPI[i] + "</span>";
                        }
                    }
                    else {
                        dataHtml += "<br/><span style='" + vDStyle + "'><input id='" + sender.dataSource.zipCodeAPI[i] + "' type='checkbox' name='datalistitem' value='' />" + sender.dataSource.zipCodeAPI[i] + "</span>";
                    }
                }
            });
        }
    }
    return dataHtml;
}

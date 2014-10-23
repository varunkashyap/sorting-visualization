function MergeSort(a, options) {
    var sort, merge_aux, merge, merge_in_place, aux, less;
    
    options.merge_in_place = options.merge_in_place !== false;
    this.a = a;

    this.run = function() {
        aux = [];
        sort(a, 0, a.length - 1);
        return a;
    };

    sort = function(a, lo, hi) {
        if( hi <= lo) return;

        var mid = Math.floor(lo + (hi - lo) / 2);
        sort(a, lo, mid);
        sort(a, mid + 1, hi);
        merge(a, lo, mid, hi);
    };

    // Merging using auxiliary array
    merge_aux = function (a, lo, mid, hi) {
        var i = lo, j = mid + 1;

        // copy into auxiliary array
        aux = a.slice(); //shortcut to make copy of an array

        for(k = lo; k <= hi; k++) {
            if (i > mid) {
                a[k] = aux[j];
                j++;
            } else if (j > hi) {
                a[k] = aux[i];
                i++;
            } else if (less(aux[j], aux[i])) {
                a[k] = aux[j];
                j++;
            } else {
                a[k] = aux[i];
                i++;
            }
        }
    };

    less = function(a, b) {
        return a < b;
    };

    merge = options.merge_in_place ? merge_in_place : merge_aux;
}
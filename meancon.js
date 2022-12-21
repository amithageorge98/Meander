function kth_diag_indices(a,k){
    //function for finding diagonal indices with k offset
    //from https://stackoverflow.com/questions/10925671/numpy-k-th-diagonal-indices]
    let rows=diag_indices_from(a);
    let cols=diag_indices_from(a);
    let rowsnj=nj.array(rows);
    let colsnj=nj.array(cols);
    if(k<0){
        return rows.slice(0,k+1),cols.slice(-k);
    }else if (k>0){
        return rows.slice(k),cols.slice(-1,-k);
    }else {
        return rows,cols;
    }
}


function diag_indices_from(a){
    //a is the array (2d)
    if (!(a.ndim >= 2)) {
        throw new ValueError("input array must be at least 2-d");
      }
      if (!alltrue(diff(a.shape) === 0)) {
        throw new ValueError("All dimensions of input must be of equal length");
      }
    Return[diag_indices[a.shape[0], a.ndim]];
}

function diag_indices(n,ndim=2)
{
    var idx;
    idx = arange(n);
    Return[idx * ndim]
}

function generate_initial_channel(W,D,Sl,deltas,pad,n_bends)
{
    var noisy_len,pad1,x,y,deltaz,z;
    noisy_len = n_bends * 10 * W / 2.0;
    pad1 = Number.parseInt(pad / 10.0);
    if (pad1 < 5) {
        pad1 = 5;
      }
    x = np.linspace(0, noisy_len + (pad + pad1) * deltas, Number.parseInt(noisy_len / deltas + pad + pad1) + 1);
    y = 10.0 * (2 * np.random.random_sample(Number.parseInt(noisy_len / deltas) + 1) - 1);
    y = np.hstack([np.zeros(pad1), y, np.zeros(pad)]);  
    deltaz = Sl * deltas * (x.length - 1);
    z = np.linspace(0,deltaz,len(x))
    return channel[x,y,z,w,d]
}
function find_cutoffs(x,y,crdist,deltas)
{
    var diag_blank_width,dist,cols,rows,i1,i2,ind1,ind2;
    diag_blank_width = Number.parseInt((crdist + 20 * deltas) / deltas);
    dist = distance.cdist(np.array([x, y]).T, np.array([x, y]).T);
    dist[dist > crdist] = np.NaN;
    for (var k = -diag_blank_width, _pj_a = diag_blank_width + 1; k < _pj_a; k += 1) {
        [rows, cols] = kth_diag_indices(dist, k);
        dist[[rows, cols]] = np.NaN;
    }
    [i1, i2] = np.where(~np.isnan(dist));
    ind1 = i1[np.where(i1 < i2)[0]];
    ind2 = i2[np.where(i1 < i2)[0]];
    Return[ind1,ind2];
}
function cut_off_cutoffs(x,y,z,s,crdist,deltas)
{
    
}

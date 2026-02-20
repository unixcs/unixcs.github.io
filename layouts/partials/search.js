{{- /* hugo-PaperMod/layouts/partials/search.js */ -}}
{{- if .Site.Params.enableSearch }}
<script>
document.addEventListener('DOMContentLoaded', function() {
    var searchTrigger = document.getElementById('search-trigger');
    var searchModal = document.getElementById('search-modal');
    var searchClose = document.getElementById('search-close');
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    
    if (!searchTrigger || !searchModal) return;
    
    // 生成搜索索引
    var searchIndex = [];
    {{- range where .Site.RegularPages "Type" "in" "posts" }}
    searchIndex.push({
        title: "{{ .Title }}",
        url: "{{ .Permalink }}",
        content: {{ .Summary | jsonify }}
    });
    {{- end }}
    
    // 打开搜索
    searchTrigger.addEventListener('click', function() {
        searchModal.style.display = 'flex';
        searchInput.focus();
    });
    
    // 关闭搜索
    searchClose.addEventListener('click', function() {
        searchModal.style.display = 'none';
    });
    
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            searchModal.style.display = 'none';
        }
    });
    
    // 搜索功能
    searchInput.addEventListener('input', function() {
        var query = this.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        var results = searchIndex.filter(function(item) {
            return item.title.toLowerCase().includes(query) || 
                   item.content.toLowerCase().includes(query);
        }).slice(0, 10);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="no-results">没有找到相关文章</p>';
            return;
        }
        
        var html = '';
        results.forEach(function(item) {
            html += '<a href="' + item.url + '" class="search-result">' +
                    '<h3>' + item.title + '</h3>' +
                    '</a>';
        });
        searchResults.innerHTML = html;
    });
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal.style.display === 'flex') {
            searchModal.style.display = 'none';
        }
        if (e.altKey && e.key === '/') {
            e.preventDefault();
            searchModal.style.display = 'flex';
            searchInput.focus();
        }
    });
});
</script>
{{- end }}

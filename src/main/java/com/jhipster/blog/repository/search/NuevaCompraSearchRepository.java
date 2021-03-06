package com.jhipster.blog.repository.search;

import com.jhipster.blog.domain.NuevaCompra;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the NuevaCompra entity.
 */
public interface NuevaCompraSearchRepository extends ElasticsearchRepository<NuevaCompra, Long> {
}

package team.bham.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import team.bham.domain.Supplier;
import team.bham.repository.SupplierRepository;
import team.bham.web.rest.errors.BadRequestAlertException;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link team.bham.domain.Supplier}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SupplierResource {

    private final Logger log = LoggerFactory.getLogger(SupplierResource.class);

    private static final String ENTITY_NAME = "supplier";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SupplierRepository supplierRepository;

    public SupplierResource(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    /**
     * {@code POST  /suppliers} : Create a new supplier.
     *
     * @param supplier the supplier to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new supplier, or with status {@code 400 (Bad Request)} if the supplier has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/suppliers")
    public ResponseEntity<Supplier> createSupplier(@RequestBody Supplier supplier) throws URISyntaxException {
        log.debug("REST request to save Supplier : {}", supplier);
        if (supplier.getId() != null) {
            throw new BadRequestAlertException("A new supplier cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Supplier result = supplierRepository.save(supplier);
        return ResponseEntity
            .created(new URI("/api/suppliers/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /suppliers/:id} : Updates an existing supplier.
     *
     * @param id the id of the supplier to save.
     * @param supplier the supplier to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated supplier,
     * or with status {@code 400 (Bad Request)} if the supplier is not valid,
     * or with status {@code 500 (Internal Server Error)} if the supplier couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/suppliers/{id}")
    public ResponseEntity<Supplier> updateSupplier(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Supplier supplier
    ) throws URISyntaxException {
        log.debug("REST request to update Supplier : {}, {}", id, supplier);
        if (supplier.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, supplier.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!supplierRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Supplier result = supplierRepository.save(supplier);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, supplier.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /suppliers/:id} : Partial updates given fields of an existing supplier, field will ignore if it is null
     *
     * @param id the id of the supplier to save.
     * @param supplier the supplier to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated supplier,
     * or with status {@code 400 (Bad Request)} if the supplier is not valid,
     * or with status {@code 404 (Not Found)} if the supplier is not found,
     * or with status {@code 500 (Internal Server Error)} if the supplier couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/suppliers/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Supplier> partialUpdateSupplier(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Supplier supplier
    ) throws URISyntaxException {
        log.debug("REST request to partial update Supplier partially : {}, {}", id, supplier);
        if (supplier.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, supplier.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!supplierRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Supplier> result = supplierRepository
            .findById(supplier.getId())
            .map(existingSupplier -> {
                if (supplier.getIsSupplier() != null) {
                    existingSupplier.setIsSupplier(supplier.getIsSupplier());
                }

                return existingSupplier;
            })
            .map(supplierRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, supplier.getId().toString())
        );
    }

    /**
     * {@code GET  /suppliers} : get all the suppliers.
     *
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of suppliers in body.
     */
    @GetMapping("/suppliers")
    public List<Supplier> getAllSuppliers(@RequestParam(required = false) String filter) {
        if ("activitycompany-is-null".equals(filter)) {
            log.debug("REST request to get all Suppliers where activityCompany is null");
            return StreamSupport
                .stream(supplierRepository.findAll().spliterator(), false)
                .filter(supplier -> supplier.getActivityCompany() == null)
                .collect(Collectors.toList());
        }

        if ("decocompany-is-null".equals(filter)) {
            log.debug("REST request to get all Suppliers where decoCompany is null");
            return StreamSupport
                .stream(supplierRepository.findAll().spliterator(), false)
                .filter(supplier -> supplier.getDecoCompany() == null)
                .collect(Collectors.toList());
        }

        if ("notification-is-null".equals(filter)) {
            log.debug("REST request to get all Suppliers where notification is null");
            return StreamSupport
                .stream(supplierRepository.findAll().spliterator(), false)
                .filter(supplier -> supplier.getNotification() == null)
                .collect(Collectors.toList());
        }
        log.debug("REST request to get all Suppliers");
        return supplierRepository.findAll();
    }

    /**
     * {@code GET  /suppliers/:id} : get the "id" supplier.
     *
     * @param id the id of the supplier to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the supplier, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/suppliers/{id}")
    public ResponseEntity<Supplier> getSupplier(@PathVariable Long id) {
        log.debug("REST request to get Supplier : {}", id);
        Optional<Supplier> supplier = supplierRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(supplier);
    }

    /**
     * {@code DELETE  /suppliers/:id} : delete the "id" supplier.
     *
     * @param id the id of the supplier to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/suppliers/{id}")
    public ResponseEntity<Void> deleteSupplier(@PathVariable Long id) {
        log.debug("REST request to delete Supplier : {}", id);
        supplierRepository.deleteById(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}

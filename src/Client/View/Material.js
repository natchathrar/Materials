import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Input } from 'antd';
import PeriodicTable from './PeriodicTable';

const MaterialsSearch = () => {
    const [materials, setMaterials] = useState([]);
    const [filteredMaterials, setFilteredMaterials] = useState([]);

    const handleSearch = (value) => {
        const filteredData = materials.filter((material) => {
            return (
                material.material_id.toLowerCase().includes(value.toLowerCase()) ||
                material.formula_pretty.toLowerCase().includes(value.toLowerCase()) ||
                material.symmetry.crystal_system.toLowerCase().includes(value.toLowerCase()) ||
                material.symmetry.symbol.toLowerCase().includes(value.toLowerCase()) ||
                material.symmetry.number.toString().includes(value)
            );
        });
        console.log('Filtered Data:', filteredData);
        setFilteredMaterials(filteredData);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = 'YOUR_API_KEY'; //Replace your api key

                const response = await fetch(
                    `https://api.materialsproject.org/materials/summary/?_limit=15&_skip=0&chemsys=Si-O-K&deprecated=false&_fields=theoretical%2Cmaterial_id%2Cformula_pretty%2Csymmetry.crystal_system%2Csymmetry.symbol%2Csymmetry.number%2Cnsites%2Cenergy_above_hull%2Cformation_energy_per_atom%2Cis_stable%2Cvolume%2Cdensity%2Cband_gap%2Cis_gap_direct%2Cis_metal%2Cordering%2Ctotal_magnetization%2Ck_voigt%2Ck_reuss%2Ck_vrh%2Cg_voigt%2Cg_reuss%2Cg_vrh%2Cuniversal_anisotropy%2Cweighted_surface_energy%2Csurface_anisotropy%2Cshape_factor%2Cweighted_work_function%2Ce_ij_max%2Ce_total%2Ce_ionic%2Ce_static`,
                    {
                        headers: {
                            'X-Api-Key': apiKey,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    console.log(data.data);
                    const res = data.data;
                    setFilteredMaterials(res || []);
                    setMaterials(res || []);
                } else {
                    console.error('Failed to fetch materials:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    const { Search } = Input;
    const columns = [
        {
            name: 'Material ID',
            selector: 'material_id',
            sortable: true,
        },
        {
            name: 'Formula',
            selector: 'formula_pretty',
            sortable: true,
        },
        {
            name: 'Crystal System',
            selector: 'symmetry.crystal_system',
            sortable: true,
        },
        {
            name: 'Symbol',
            selector: 'symmetry.symbol',
            sortable: true,
        },
        {
            name: 'Element Number',
            selector: 'symmetry.number',
            sortable: true,
        },
    ];

    return (
        <div>
            <PeriodicTable />
            <div className='mt-5'>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Search
                        placeholder='Input search text'
                        prefix={<i className='bx bx-search fs-6'></i>}
                        className='w-75 text-center'
                        enterButton='Search'
                        size='large'
                        onSearch={handleSearch}
                    />

                </div>

                <div className='container m-5 card' style={{ zIndex: '1' }}>
                    <DataTable columns={columns} data={filteredMaterials} pagination />
                </div>

            </div>
        </div>
    );
};

export default MaterialsSearch;

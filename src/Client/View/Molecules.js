import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Input, Select } from 'antd';
import Loader from './Layouts/Loader';
import { ToastContainer, toast } from 'react-toastify';


const MoleculeSearch = () => {
    const [materials, setMaterials] = useState([]);
    const [filteredMaterials, setFilteredMaterials] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSearch = (value) => {
        const filteredData = materials.filter((material) => {
            return (
                material.molecule_id.toLowerCase().includes(value.toLowerCase()) ||
                material.formula_alphabetical.toLowerCase().includes(value.toLowerCase()) ||
                material.charge.toLowerCase().includes(value.toLowerCase())
            );
        });
        console.log('Filtered Data:', filteredData);
        setFilteredMaterials(filteredData);
    };


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const apiKey = '0ePIMk5guZjI37IWmJXDScFAEEdInUzn'; // Replace your api key

                const response = await fetch(
                    `http://localhost:9000/molecules/summary/?_fields=molecule_id%2Cformula_alphabetical%2Celectron_affinity%2Cionization_energy%2Ccharge%2Cspin_multiplicity`,
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
                    toast.success('Molecules get successfully')
                } else {
                    console.error('Failed to fetch materials:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const { Search } = Input;
    const { Option } = Select;

    const columns = [
        {
            name: 'Molecule ID',
            selector: 'molecule_id',
            sortable: true,
        },
        {
            name: 'Formula',
            selector: 'formula_alphabetical',
            sortable: true,
        },
        {
            name: 'Charge',
            selector: 'charge',
            sortable: true,
        },
    ];

    return (
        <div>
            <div className='mt-5'>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Search
                        placeholder='Search by formula,element_id,charge'
                        prefix={<i className='bx bx-search fs-6'></i>}
                        className='w-75 text-center'
                        enterButton='Search'
                        size='large'
                        onSearch={handleSearch}
                    />
                </div>

                <div className='container m-5 card' style={{ zIndex: '1' }}>
                    <DataTable columns={columns} data={filteredMaterials} pagination progressPending={loading} persistTableHead progressComponent={<Loader />} />
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default MoleculeSearch;

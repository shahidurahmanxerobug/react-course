<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure roles exist
        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'sanctum']);
        $customerRole = Role::firstOrCreate(['name' => 'customer', 'guard_name' => 'sanctum']);

        // Create Admin user
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password123'),
                'phone_number' => '971500000001',
                'is_whatsapp' => true,
            ]
        );
        $admin->assignRole($adminRole);

        // Create token for admin user
        $adminToken = $admin->createToken('admin-token')->plainTextToken;
        echo "Admin Token: $adminToken\n";

        // Create Customer user
        $customer = User::firstOrCreate(
            ['email' => 'customer@example.com'],
            [
                'name' => 'Customer User',
                'password' => Hash::make('password123'),
                'phone_number' => '971500000002',
                'is_whatsapp' => true,
            ]
        );
        $customer->assignRole($customerRole);

        // Create token for customer user
        $customerToken = $customer->createToken('customer-token')->plainTextToken;
        echo "Customer Token: $customerToken\n";

    }
}

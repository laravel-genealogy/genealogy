<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use LaravelEnso\Tables\App\Traits\TableCache;

/**
 * @property int $id
 * @property string $group
 * @property int $gid
 * @property string $even
 * @property string $role
 * @property string $created_at
 * @property string $updated_at
 */
class SourceRefEven extends Model
{
    use TableCache;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'sourceref_even';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['group', 'gid', 'even', 'role', 'created_at', 'updated_at'];
}